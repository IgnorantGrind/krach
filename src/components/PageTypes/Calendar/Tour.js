import React from "react";
import PropTypes from "prop-types";
import Show from "./Show";

// tour component

const Tour = ({ tour, dateFormat }) => {
  const result = "shows" in tour ?
    tour.shows.map((show) => {

      return (
        <ul>
          <Show
            show={show}
          />
        </ul>
      );
    }) :
    <></>;

  return result;
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
  dateFormat: PropTypes.string
};

export default Tour;
