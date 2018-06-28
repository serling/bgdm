import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import VisuallyHidden from '../../components/visually-hidden';
import Icon from '../../components/icon';

const themes = {
  default: 'default',
  filter: 'filter',
  dropdown: 'dropdown'
};

const Button = ({
  text,
  onClick,
  children,
  theme,
  className,
  disabled,
  isActive,
  iconSize,
  iconName,
  iconNameActive
}) => (
  <button
    className={cn(
      'button',
      `button--${theme}`,
      {
        'button--active': isActive,
        'button--has-icon': iconName
      },
      className
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {iconName ? (
      <VisuallyHidden>{text || children}</VisuallyHidden>
    ) : (
      <span className="filter-button__text">{text || children}</span>
    )}
    {iconNameActive &&
      isActive && (
        <Icon
          className="filter-button__icon--active"
          name={iconNameActive}
          size={iconSize}
        />
      )}
    {!isActive && (
      <Icon className="filter-button__icon" name={iconName} size={iconSize} />
    )}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  iconName: PropTypes.string,
  iconSize: PropTypes.string,
  iconNameActive: PropTypes.string,
  disabled: PropTypes.bool,
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
