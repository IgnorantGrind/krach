import React from "react";
import PropTypes from "prop-types";
import Year from "./Year";

// Calendar component

const Calendar = ({ years, dateFormat }) => {
  const result = Object.keys(years).map((year) => {

    return (
      <>
        <h4>
          {years[year][0].date.year}
        </h4>
        <ul>
          <Year year={years[year]} />
        </ul>
      </>
    );
  })

  return result;
};

Calendar.propTypes = {
  tour: PropTypes.object.isRequired,
  dateFormat: PropTypes.string
};

export default Calendar;
