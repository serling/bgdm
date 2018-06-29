import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  shadow: 'shadow'
};

const Background = ({ className, name, theme, src }) =>
  !name && !src ? null : (
    <div
      style={{ backgroundImage: src ? `url(${src})` : undefined }}
      className={cn(
        'background',
        { [`background--${name}`]: name },
        `background--${theme}`,
        className
      )}
    />
  );

Background.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  src: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Background.themes = themes;

export default Background;
