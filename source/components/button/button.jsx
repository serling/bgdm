import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import VisuallyHidden from '../../components/visually-hidden';

const themes = {
  default: 'default',
  filter: 'filter'
};

const Button = ({
  text,
  onClick,
  children,
  theme,
  className,
  isActive,
  disabled,
  icon
}) => (
  <button
    className={cn(
      'button',
      `link--${theme}`,
      {
        'button--active': isActive,
        'button--has-icon': icon
      },
      className
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {icon ? (
      <VisuallyHidden>{text || children}</VisuallyHidden>
    ) : (
      <span className="filter-button__text">{text || children}</span>
    )}
    <span className="filter-button__icon">{icon}</span>
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Button.defaultProps = {
  theme: themes.default
};

Button.themes = themes;

export default Button;
