import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  shadow: 'shadow'
};

const Background = ({ className, name, theme }) =>
  !name ? null : (
    <div
      className={cn(
        'background',
        `background--${name}`,
        `background--${theme}`,
        `background--${themes.shadow}`, //TODO: improve this, same as theme
        className
      )}
    />
  );

Background.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Background.themes = themes;

export default Background;
