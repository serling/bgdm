import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  linethrough: 'linethrough'
};

const Heading = ({ children, className, level, theme }) =>
  React.createElement(
    `h${level}`,
    { className: cn('heading', [`heading--${theme}`], className) },
    <span className="heading__inner">{children}</span>
  );

Heading.defaultProps = {
  level: 2
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  level: PropTypes.number,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Heading.themes = themes;

export default Heading;
