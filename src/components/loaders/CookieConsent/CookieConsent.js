import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CookieConsent.css"

const CookieConsent = ({ text = "This external plugin uses tracking cookies, so we need your consent to continue.", children }) => {
  const [isConsent, setConsent] = useState(false);

  const button = (
    <div
      className="cookie-consent-container"
    >
      <div
        className="cookie-consent"
      >
        {text}
        <br />
        <button
          className="cookie-consent-button"
          type="button"
          onClick={() => setConsent(true)}
        >
          OK
        </button>
      </div>
    </div>
  );

  return (
    <>
      {!isConsent && button}
      {isConsent && children}
    </>
  );
};

CookieConsent.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CookieConsent;