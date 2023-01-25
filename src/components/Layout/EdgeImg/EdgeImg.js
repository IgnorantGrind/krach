import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../../contexts/GlobalContext';
import classNames from 'classnames';

import './EdgeImg.css';

// image with automatic size control

const EdgeImg = ({ isLeft = true }) => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { edgeImgLeft, edgeImgRight, edgeImgAlt } = Config;
  const src = isLeft ?
    edgeImgLeft :
    edgeImgRight;

  // container with image

  return src &&
    < div
      className={classNames({
        'edge-container-left': isLeft,
        'edge-container-right': !isLeft
      })}
    >
      <img
        src={src}
        alt={edgeImgAlt}
        className='edge-img'
      />
    </div>;
};

EdgeImg.propTypes = {
  isLeft: PropTypes.bool
};

export default EdgeImg;