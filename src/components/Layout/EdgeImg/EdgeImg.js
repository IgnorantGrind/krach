import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './EdgeImg.css';

// image with automatic size control

const EdgeImg = ({ src, isLeft = true, alt = '' }) => (

  // container for layout

  <div
    className={classNames({
      'edge-container-left': isLeft,
      'edge-container-right': !isLeft
    })}
  >


    <img
      src={src}
      alt={alt}
      className='edge-img'
    />
  </div>
);

EdgeImg.propTypes = {
  src: PropTypes.string.isRequired,
  isLeft: PropTypes.bool,
  alt: PropTypes.string
};

export default EdgeImg;