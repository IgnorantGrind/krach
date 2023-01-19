import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// create global context

const GlobalContext = createContext();

// initialize global variables

const GlobalContextProvider = ({ config, children }) => {

  // set local image path

  const Config = config;

  const { imagePath, mainLogo, additionalLogo, edgeImgLeft, edgeImgRight } = Config;
  Config.mainLogo = imagePath + mainLogo;
  Config.additionalLogo = imagePath + additionalLogo;
  Config.edgeImgLeft = imagePath + edgeImgLeft;
  Config.edgeImgRight = imagePath + edgeImgRight;

  // provide context for children

  return (
    <GlobalContext.Provider
      value={{
        Config
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  config: PropTypes.object,
  children: PropTypes.node.isRequired
};

export { GlobalContext };
export default GlobalContextProvider;
