import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Navbar from './navbar';
import Footer from './footer';

import GlobalTheme from '../theme/global';
import { dark, light } from '../theme';

// manually changing for now for development
// should probably make themeprovider its own component and import it into layout
const theme = 'light';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
      `}
      render={data => (
        <main>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
          </Helmet>
          <ThemeProvider theme={theme === 'dark' ? dark : light}>
            <GlobalTheme />
            <Navbar siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      )}
    />
  );
};

export default Layout;
