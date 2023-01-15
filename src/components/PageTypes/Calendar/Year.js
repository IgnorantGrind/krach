import React from "react";
import PropTypes from "prop-types";
import Tour from "./Tour";
import Show from "./Show";

// year component

const Year = ({ year, dateFormat }) => {
  const result = year.map((show) => {

    return "tour" in show ?
      <Tour
        tour={show}
        dateFormat={dateFormat}
      /> :
      <Show
        show={show}
        dateFormat={dateFormat}
      />
  });

  return (
    <>
      <h4>
        - {year[0].date.year} -
      </h4>
      {result}
    </>
  );;
};

Year.propTypes = {
  year: PropTypes.array.isRequired,
  dateFormat: PropTypes.string
};

export default Year;
