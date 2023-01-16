import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import HtmlMapper from 'react-html-map';
import { tagMap } from '../Layout/Layout';

// fetch page html

let html;

fetch('content/video.html')
  .then((response) => response.text())
  .then((data) => {
    html = data;
  })
  .catch((err) => {
    console.log('Failed to fetch page: ', err);
  });

// create page from html string 

const Video = ({ title, subtitle, cookieConsentText }) => {
  console.log(cookieConsentText);

  return (
    <>

      {/* create helmet */}

      <Helmet>
        <title>{title} - {subtitle}</title>
      </Helmet>

      {/* convert html string to html elements and react components */}

      <HtmlMapper html={html}>
        {tagMap(cookieConsentText)}
      </HtmlMapper>
    </>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cookieConsentText: PropTypes.string
};

export default Video;
