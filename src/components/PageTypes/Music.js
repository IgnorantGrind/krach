import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import HtmlMapper from 'react-html-map';
import { tagMap } from "../Layout/Layout";

// fetch page html

let html;

fetch("content/music.html")
  .then((response) => response.text())
  .then((data) => {
    html = data;
  })
  .catch((err) => {
    console.log("Failed to fetch page: ", err);
  });

// create page from html string 

const Music = ({ title, subtitle }) => {

  return (
    <>

      {/* create helmet */}

      <Helmet>
        <title>{title} - {subtitle}</title>
      </Helmet>

      {/* convert html string to html elements and react components */}

      <HtmlMapper html={html}>
        {tagMap}
      </HtmlMapper>
    </>
  );
};

Music.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Music;
