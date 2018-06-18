import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header className="layout__header" />
    <div className="layout__content">{children}</div>
    <Footer className="layout__footer" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {};

export default Layout;
