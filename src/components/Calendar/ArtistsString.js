import React from 'react';
import PropTypes from 'prop-types';

// bands components, renders the bandnames for a show

const ArtistsString = ({ show }) => {
  let result = '';
  if ('artists' in show) {
    let artist;
    for (artist of show.artists)
      result += ' + ' + artist;
  };

  return 'bands' in show ?
    <li
      className='bandNames'
    >
      {result}
    </li> :
    <></>;
};

ArtistsString.propTypes = {
  show: PropTypes.object.isRequired,
};

export default ArtistsString;
