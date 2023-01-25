import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../../contexts/GlobalContext';
import HtmlProvider from '../../../providers/HtmlProvider';

import './ThirdSideTrackerConsentPane.css'

// this component shows a cookie consent formular before loading the components children for the first time

const ThirdSideTrackerConsentPane = ({ thirdSiteName, cookiePolicyUrl, agreeToTracker }) => {

  // check for user censent

  const { Config } = useContext(GlobalContext);
  const { knownTrackerConsentText, unknownTrackerConsentText } = Config;

  // prepare consent pane text

  var text = cookiePolicyUrl === 'unknown' ?
    unknownTrackerConsentText :
    knownTrackerConsentText;

  text = text.replaceAll('%thirdSiteName%', thirdSiteName);
  text = text.replace('%cookiePolicyUrl%', '<a href="' + cookiePolicyUrl + '">' + cookiePolicyUrl + '</a>');

  // conditionally render consent formular or children

  const consentPane = (
    <div
      className='cookie-consent-container'
    >
      <div
        className='cookie-consent'
      >
        <HtmlProvider html={text} />
        <br />
        <button
          className='cookie-consent-button'
          type='button'
          onClick={() => agreeToTracker(thirdSiteName)}
        >
          Ok
        </button>
      </div>
    </div>
  );

  return consentPane;
};

ThirdSideTrackerConsentPane.propTypes = {
  thirdSiteName: PropTypes.string.isRequired,
  cookiePolicyUrl: PropTypes.string.isRequired,
  agreeToTracker: PropTypes.func.isRequired
};

export default ThirdSideTrackerConsentPane;
