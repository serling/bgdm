import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

const Text = ({ children, text, size }) => (
  <p className={cn('text', `text--${size}`)}>{children || text}</p>
);

Text.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key]))
};

Text.sizes = sizes;

export default Text;
