import React, { createContext, useState } from 'react';
// import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

// create context

const CookieContext = createContext();

// initialize cookie preferences, set up states

const CookieContextProvider = ({ children }) => {

  /* const [cookies, setCookie] = useCookies(['cookie-consent']); */
  const [trackerConsent, setTrackerConsent] = useState([]);

  // setter

  const agreeToTracker = (thirdSiteName) => {
    if (!trackerConsent.includes(thirdSiteName)) {
    /*var date = new Date();
      date.setMonth(date.getMonth() + 1);

      // set cookie

      setCookie(
        thirdSiteName,
        true,
        {
          path: '/',
          expires: date,
          sameSite: 'lax'
        }
      );*/

      // set app state

      setTrackerConsent(
        [
          ...trackerConsent,
          thirdSiteName
        ]
      );
    };
  }

  // getter

  const isTrackerConsent = (thirdSiteName) => {
  /*if (cookies[thirdSiteName])
      if (!trackerConsent.includes(thirdSiteName))
        setTrackerConsent(
          [
            ...trackerConsent,
            thirdSiteName
          ]
        );*/
    return trackerConsent.includes(thirdSiteName);
  }

  // provide context for children

  return (
    <CookieContext.Provider
      value={{
        isTrackerConsent,
        agreeToTracker
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
