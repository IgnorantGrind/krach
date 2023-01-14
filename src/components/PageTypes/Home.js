import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import HtmlMapper from 'react-html-map';
import { tagMap } from "../Layout/Layout";

// fetch page html

let html;

fetch("content/home.html")
  .then((response) => response.text())
  .then((data) => {
    html = data;
  })
  .catch((err) => {
    console.log("Failed to fetch page: ", err);
  });

// create page from html string 

const Home = ({ title, subtitle }) => {

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

Home.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Home;
