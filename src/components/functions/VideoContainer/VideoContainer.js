import React from 'react';
import PropTypes from 'prop-types';

import './VideoContainer.css';

// make embedded video responsive with css

const VideoContainer = ({ iframe }) => (
  <div
    className='video-container'
  >
    {iframe}
  </div>
);

VideoContainer.propTypes = {
  iframe: PropTypes.element.isRequired
};

export default VideoContainer;