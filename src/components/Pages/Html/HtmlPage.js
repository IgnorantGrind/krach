import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { HtmlProvider } from '../../../providers/HtmlProvider';

// create page from id
const HtmlPage = ({ html id, title, subtitle }) => {

  return (
    <>

      {/* create helmet */}

      <Helmet>
        <title>{title} - {subtitle}</title>
      </Helmet>

      {/* convert html string to html elements and react components */}

      <HtmlProvider html={html} />
    </>
  );
};

HtmlPage.propTypes = {
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default HtmlPage;
