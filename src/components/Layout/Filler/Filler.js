import React from 'react';
import PropTypes from 'prop-types';

import './Filler.css';

// flexbox filler element with flex = 1 

const Filler = ({ size }) => {
  return size === 'small' ?
    <div
      className='filler-small'
    /> :
    size === 'big' ?
      <div
        className='filler-big'
      /> :
      <div
        className='filler'
      />;
};

Filler.propTypes = {
  size: PropTypes.string
};

export default Filler;
