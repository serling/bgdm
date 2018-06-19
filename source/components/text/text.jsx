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
  default: 'default',
  quote: 'quote'
};

const Text = ({ children, text, size, theme }) => (
  <p className={cn('text', `text--size-${size}`, `text--${theme}`)}>
    {children || text}
  </p>
);

Text.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key])),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Text.defaultProps = {
  size: sizes.small,
  theme: themes.default
};

Text.themes = themes;
Text.sizes = sizes;

export default Text;
