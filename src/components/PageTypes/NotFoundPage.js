import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = ({ title, subtitle, message }) => (
  <>
    <Helmet>
      <title>{title} - {subtitle}</title>
    </Helmet>
    <div>
      <h1>
        Error
      </h1>
      <p>
        {message}
      </p>
    </div>
  </>
);

NotFoundPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default NotFoundPage;
