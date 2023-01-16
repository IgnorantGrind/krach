import React from 'react';
import PropTypes from 'prop-types';
import Year from './Year';
import './Calendar.css'

// Calendar component

const Calendar = ({ years, dateFormat }) => {
  const result = years.map((year) => {
    return (
        <ul>
          <Year
            year={year}
            dateFormat={dateFormat}
          />
        </ul>
    );
  })

  return result;
};

Calendar.propTypes = {
  tour: PropTypes.object.isRequired,
  dateFormat: PropTypes.string
};

export default Calendar;
