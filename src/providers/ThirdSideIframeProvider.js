import React, { useContext } from 'react';
import Iframe from 'react-iframe';
import PropTypes from 'prop-types';

import { CookieContext } from '../contexts/CookieContext';
import VideoContainer from '../components/functions/VideoContainer/VideoContainer';
import ThirdSideTrackerConsentPane from '../components/functions/ThirdSideTrackerConsentPane/ThirdSideTrackerConsentPane';

// provides cookie policies, user consent and responsive video handling
// support for YouTube, Vimeo, Twitch, Bandcamp & Soundcloud

const ThirdSideIframeProvider = ({ src, ...rest }) => {

  // initialize with cookie context

  const { isTrackerConsent, agreeToTracker } = useContext(CookieContext);

  let url = src;
  let name = (new URL(url)).hostname;
  let cookiePolicyUrl = 'unknown';
  let isVideo = false;
  let noConsentNecessary = false;

  // set cookie policy and source type for supported sites

  // YouTube 
  //  - enforce '-nocookies'
  //  - cookies are loaded when user clicks on video

  if (name.includes('youtube.com')) {
    if (!name.includes('youtube-nocookie.com'))
      url = src.replace('youtube.com', 'youtube-nocookie.com');
    cookiePolicyUrl = 'https://policies.google.com/technologies/cookies';
    isVideo = true;
    name = 'YouTube';

    // Vimeo
    //  - enforce the do not track url slag 'dnt=1'

  } else if (name.includes('vimeo.com')) {
    if (!src.includes('dnt=1'))
      url = src.includes('?') ?
        src + '&dnt=1' :
        src + '?dnt=1';
    cookiePolicyUrl = null;
    isVideo = true;
    noConsentNecessary = true;

    // Twitch

  } else if (name.includes('twitch.tv')) {
    cookiePolicyUrl = 'https://www.twitch.tv/p/de-de/legal/cookie-notice';
    isVideo = true;
    name = 'Twitch';

    // Bandcamp

  } else if (name.includes('bandcamp.com')) {
    cookiePolicyUrl = 'https://bandcamp.com/privacy';
    name = 'Bandcamp';

    // Soundcloud

  } else if (name.includes('soundcloud.com')) {
    cookiePolicyUrl = 'https://soundcloud.com/pages/cookies';
    name = 'Soundcloud';
  };

  // make videos responsive
  console.log(url);
  const iframe = (
    <Iframe
      src={url}
      {...rest}
    />
  );

  const thirdSideContent = isVideo ?
    <VideoContainer
      iframe={iframe}
    /> :
    iframe;

  // return (wrapped) frame, with consent pane if necessary

  return (noConsentNecessary || isTrackerConsent(name)) ?
    thirdSideContent :
    <ThirdSideTrackerConsentPane
      thirdSiteName={name}
      cookiePolicyUrl={cookiePolicyUrl}
      agreeToTracker={agreeToTracker}
    />;
};

ThirdSideIframeProvider.propTypes = {
  src: PropTypes.string.isRequired
};

export default ThirdSideIframeProvider;
