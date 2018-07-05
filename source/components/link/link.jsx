import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

const themes = {
  default: 'default'
};

const Link = ({ text, href, children, theme, routerHref, className }) =>
  React.createElement(
    routerHref ? RouterLink : 'a',
    {
      className: cn('link', `link--${theme}`, className),
      to: routerHref,
      href: routerHref ? undefined : href
    },
    text || children
  );

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  routerHref: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.defaultProps = {
  theme: themes.default
};

Link.themes = themes;

export default Link;
