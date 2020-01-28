import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import dark from './dark';
import light from './light';
import Global from './global';

const getBrowserTheme = () => {
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)') || undefined;

  // manually changing for now for development
  // return mql && mql.matches ? 'dark' : 'light';
  return 'light';
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={getBrowserTheme() === 'dark' ? dark : light}>
      <Global />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider;
