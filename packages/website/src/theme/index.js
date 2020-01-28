import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import dark from './dark';
import light from './light';
import GlobalTheme from './global';

// manually changing for now for development
const getBrowserTheme = () => {
  // const mql = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) || undefined;

  // return mql && mql.matches ? 'dark' : 'light';
  return 'light';
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={getBrowserTheme() === 'dark' ? dark : light}>
      <GlobalTheme />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider;
