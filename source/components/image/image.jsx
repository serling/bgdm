import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  grayscale: 'grayscale'
};

const colors = {
  red: 'red',
  blue: 'blue'
};

const Image = ({ src, className, theme, color }) => (
  <div
    className={cn('image__overlay', {
      [`image__overlay--${colors[color]}`]: color
    })}
  >
    <div
      className={cn(
        'image',
        {
          [`image--${themes[theme]}`]: theme,
          [`image--${colors[color]}`]: color
        },
        className
      )}
      style={{ backgroundImage: src ? `url(${src})` : undefined }}
    />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  color: PropTypes.oneOf(Object.keys(colors).map(key => colors[key])),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default Image;
