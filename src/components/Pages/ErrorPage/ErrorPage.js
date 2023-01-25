import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../../contexts/GlobalContext';

// error page component

const ErrorPage = ({ error }) => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { pageNotFound } = Config;

  // show error message

  return (
    <div>
      <h1>
        Error
      </h1>
      <p>
        {
          error === '404' ?
            "404 - " + pageNotFound :
            error
        }
      </p>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorPage;
