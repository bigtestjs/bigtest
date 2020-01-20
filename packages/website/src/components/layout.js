import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';
import Footer from './footer';

import GlobalStyles from '../styles/global.js';

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
          <GlobalStyles />
          <Navbar siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </main>
      )}
    />
  );
};

export default Layout;
