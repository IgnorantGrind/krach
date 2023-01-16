import React, { useState, useRef, useCallback, useEffect } from 'react';
import Filler from '../Fillers/Filler/Filler';
import Iframe from 'react-iframe';
import './IframeLoader.css';

// show spinner while loading iframe

const IframeLoader = ({ spinner, src, width, height, border, frameborder, ...rest }) => {

  // load iframe

  const [loading, setLoading] = useState(true);
  const iframe = useRef(null);

  const createIframe = useCallback(() => {
    iframe.current = <Iframe
      url={src}
      frameBorder={frameborder || border}
      onLoad={setLoading(false)}
      width={width}
      height={height}
      {...rest}
    />
  }, [src, width, height, border, frameborder, rest]);

  useEffect(() => {
    
    async function loadIframe() {
      await createIframe();
    }
    loadIframe();
  }, [createIframe]);

  // create main component
  return (
    <div
      style={{
        width: width,
        height: height
      }}
      className='embed'
    >
      {
        loading ?
          <div className='loading'>
            <Filler />
            {spinner}
            <Filler />
          </div> : null
      }
      {iframe.current}
    </div>
  );
};

export default IframeLoader;
