import React from 'react';

import HtmlProvider from '../../../providers/HtmlProvider';

// fetch page html

let html;

fetch('content/about.html')
  .then((response) => response.text())
  .then((data) => {
    html = data;
  })
  .catch((err) => {
    console.log('Failed to fetch page: ', err);
  });

// create page from html string 

const About = () => {

  // convert html string to html elements and react components

  return <HtmlProvider html={html} />;
};

export default About;
