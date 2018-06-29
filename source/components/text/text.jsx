import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

const themes = {
  background: 'background'
};

const Text = ({ children, text, size, theme, className }) => (
  <p className={cn('text', `text--${size}`, `text--${theme}`, className)}>
    {children || text}
  </p>
);

Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key])),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Text.defaultProps = {
  size: sizes.small
};

Text.themes = themes;
Text.sizes = sizes;

export default Text;
