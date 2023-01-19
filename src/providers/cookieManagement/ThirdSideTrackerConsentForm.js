import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../contexts/GlobalContext';
import { CookieContext } from '../../contexts/CookieContext';
// import { createGlobalState } from 'react-hooks-global-state';

import './CookieConsent.css'

// this component shows a cookie consent formular before loading the components children for the first time

const ThirdSideTrackerConsentPane = ({ src, children }) => {

  // check for user censent

  const { Config } = useContext(GlobalContext);
  const { isThirdSideTrackerConsent, setThirdSideTrackerConsent } = useContext(CookieContext);
  const { thirdSideTrackerConsentText } = Config;

  // conditionally render consent formular or children

  const ConditionalContent = () => {
    return isThirdSideTrackerConsent ?
      children :
      <div
        className='cookie-consent-container'
      >
        <div
          className='cookie-consent'
        >
          {
            thirdSideTrackerConsentText || 'Some third-side plugins use tracking cookies, so we need your consent to load them.'
          }
          <br />
          <button
            className='cookie-consent-button'
            type='button'
            onClick={() => setThirdSideTrackerConsent(true)}
          >
            Ok
          </button>
        </div>
      </div>;
  }

  return src.includes('youtube-nocookie') ?
    children :
    <ConditionalContent />;
};

ThirdSideTrackerConsentPane.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ThirdSideTrackerConsentPane;
