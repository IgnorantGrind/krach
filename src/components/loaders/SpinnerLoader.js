import React from "react";
import PropTypes from "prop-types";
import WaveSpinner from "/Spinners/WaveSpinner";

// loader component for spinner components

// check browser support for animation

const browserSupportsCSSProperty = (propertyName) => {
  var elm = document.createElement("div");
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] !== undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = "Webkit Moz ms O".split(" ");

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] !== undefined)
      return true;
  };

  return false;
};

// load spinner

const SpinnerLoader = ({ type = "wave" }) => {

  // map existing spinners

  const Spinners = {
    wave: WaveSpinner
  };

  // if browser support create spinner

  return browserSupportsCSSProperty("animation") ?
    React.createElement(Spinners[type]) : (
      <>Loading...</>
    );
};

SpinnerLoader.propTypes = {
  type: PropTypes.string
};

export default SpinnerLoader;
