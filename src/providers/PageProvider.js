import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Pages from '../components/Pages/Pages'

// create page component from id

const PageProvider = ({ id, title, subtitle }) => {
  const page = createElement(
    Pages[id],
    {
      title: title,
      subtitle: subtitle,
      error: id
    }
  );

  // create page

  return (
    <>
      <Helmet >
        <title>{title} - {subtitle}</title>
      </Helmet >

      {page}
    </>
  );
}

PageProvider.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default PageProvider;
