import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// create context

const CookieContext = createContext();

// initialize cookie preferences, set up states

const CookieContextProvider = ({ children }) => {

  const [isThirdSideTrackerConsent, setThirdSideTrackerConsent] = useState(false);

  // provide context for children

  return (
    <CookieContext.Provider
      value={{
        isThirdSideTrackerConsent,
        setThirdSideTrackerConsent
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

CookieContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { CookieContext };
export default CookieContextProvider;
