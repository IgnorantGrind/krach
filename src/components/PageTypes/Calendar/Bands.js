import React from "react";
import PropTypes from "prop-types";

// bands components, renders the bandnames for a show

const Bands = ({ show }) => {
  let result = "";
  if ("bands" in show) {
    let band;
    for (band of show.bands) {
      result += " + " + band;
    };
  };

  return "bands" in show ?
    <li
      className="bandNames"
    >
      {result}
    </li> :
    <></>;
};

Bands.propTypes = {
  show: PropTypes.object.isRequired,
};

export default Bands;
