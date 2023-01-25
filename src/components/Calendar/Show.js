import React from 'react';
import PropTypes from 'prop-types';

import ArtistsString from './ArtistsString';

// single concert date component

const Show = ({ show, dateFormat, className }) => {
  const date = dateFormat ?
    show.date.toFormat(dateFormat) :
    show.date.toFormat('DDD');
  return (
    <li
      className={className}
    >
      {date} - {show.city} - {show.venue}
      <ArtistsString
        show={show}
      />
    </li>
  );
};

Show.propTypes = {
  show: PropTypes.object.isRequired,
  dateFormat: PropTypes.string,
  className: PropTypes.string
};

export default Show;
