import React from "react";
import PropTypes from "prop-types";
import Tour from "./Tour";
import Show from "./Show";
import Bands from "./Bands";

// year component

const Year = ({ year, dateFormat }) => {
  const result = year.map((show) => {

    return "tour" in show ?
      <>
        <li
          className="tourName"
        >
          <b>{show.tour}</b>
          <Bands show={show} />
        </li>
        <Tour tour={show} />
      </> :
      <Show
        show={show}
      />;
  });

  return result;
};

Year.propTypes = {
  tour: PropTypes.object.isRequired,
  dateFormat: PropTypes.string
};

export default Year;
