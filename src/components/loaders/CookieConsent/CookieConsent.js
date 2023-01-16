import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalState } from 'react-hooks-global-state';
import './CookieConsent.css'

// set up global state

const initialState = {
  cookieConsent: false
};
const { useGlobalState } = createGlobalState(initialState);

// this component shows a cookie consent formular before loading the components children for the first time

const CookieConsent = ({ text = 'Some third-side plugins use tracking cookies, so we need your consent to load them.', children }) => {

  // getter and setter for global state

  const [isCookieConsent, setCookieConsent] = useGlobalState('cookieConsent');

  // conditionally render consent formular or children

  return (
    <>
      {
        !isCookieConsent &&
          <div
            className='cookie-consent-container'
          >
            <div
              className='cookie-consent'
            >
              {text}
              <br />
              <button
                className='cookie-consent-button'
                type='button'
                onClick={() => setCookieConsent(true)}
              >
                Ok
              </button>
            </div>
          </div>
      }
      {isCookieConsent && children}
    </>
  );
};

CookieConsent.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CookieConsent;