import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Row from '../../components/row';

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
    <Row backgroundColor={Row.colors.primary} padding={Row.paddings.medium}>
      <Header className="layout__header" linkSections={linkSections} />
    </Row>
    {children}
    <Row backgroundColor={Row.colors.primary} padding={Row.paddings.medium}>
      <Footer className="layout__footer" />
    </Row>
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
