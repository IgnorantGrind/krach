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

  return 'artists' in show ?
    <li
      className='artistNames'
    >
      {result}
    </li> :
    <></>;
};

ArtistsString.propTypes = {
  show: PropTypes.object.isRequired,
};

export default ArtistsString;
