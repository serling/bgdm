import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

const Icon = ({ className, name, size }) =>
  !name ? null : (
    <div className={cn('icon', `icon--${name}`, `icon--${size}`, className)} />
  );

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key]))
};

Icon.sizes = sizes;

export default Icon;
