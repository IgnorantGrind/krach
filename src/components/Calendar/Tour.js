import React from 'react';
import PropTypes from 'prop-types';

import Show from './Show';
import ArtistsString from './ArtistsString';

// tour component

const Tour = ({ tour, dateFormat }) => {
  const result = 'shows' in tour ?
    tour.shows.map((show) => {

      return (
        <Show 
          show={show}
          dateFormat={dateFormat}
          className='tourDates'
        />
      );
    }) :
    <></>;

  return (
    <>
      <li
        className='tourName'
      >
        <b>{tour.tour}</b>
        <ArtistsString
          show={tour}
        />
      </li>
      {result}
    </>
  )
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
  dateFormat: PropTypes.string
};

export default Tour;
