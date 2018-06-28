import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Background = ({ className, name }) =>
  !name ? null : (
    <div className={cn('background', `background--${name}`, className)} />
  );

Background.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string
};
export default Background;
