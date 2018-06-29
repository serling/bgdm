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
    {
      className: cn(
        'heading',
        `heading--${theme}`,
        `heading--level-${level}`,
        className
      )
    },
    <span className="heading__text">{children}</span>
  );

Heading.defaultProps = {
  theme: themes.default
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.number.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Heading.themes = themes;

export default Heading;
