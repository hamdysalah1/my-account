import React, { createContext, useState } from 'react';
import PropType from 'prop-types';

export const GlobalContext = createContext();

const getLangFromURL = window.location.pathname.split('/')[1];

const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    lang: getLangFromURL || 'en',
  });
  return (
    <GlobalContext.Provider value={[globalData, setGlobalData]}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropType.element.isRequired,
};

export default GlobalProvider;
