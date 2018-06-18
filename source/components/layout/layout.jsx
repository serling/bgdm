import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Footer from '../../components/footer';

const linkSections = [
  {
    heading: 'section uno',
    links: [
      {
        text: 'place to be',
        href: '#place'
      },
      {
        text: 'place to be',
        href: '#place'
      },
      {
        text: 'place to be',
        href: '#place'
      }
    ]
  },
  {
    heading: 'section two',
    links: [
      {
        text: 'place to be',
        href: '#place'
      }
    ]
  },
  {
    heading: 'section three',
    links: [
      {
        text: 'place to be',
        href: '#place'
      },
      {
        text: 'place to be',
        href: '#place'
      }
    ]
  },
  {
    heading: 'section filth',
    links: [
      {
        text: 'place to be',
        href: '#place'
      },
      {
        text: 'place to be',
        href: '#place'
      }
    ]
  }
];

const Layout = ({ children }) => (
  <div className="layout">
    <Header className="layout__header" linkSections={linkSections} />
    <div className="layout__content">{children}</div>
    <Footer className="layout__footer" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Layout.defaultProps = {};

export default Layout;
