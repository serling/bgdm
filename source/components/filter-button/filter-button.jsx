import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FilterButton = ({ isActive, onClick, text, icon }) => (
  <button
    onClick={onClick}
    className={cn('filter-button', {
      'filter-button--active': isActive,
      'filter-button--has-icon': icon
    })}
  >
    {text && <span className="filter-button__text">{text}</span>}
    {icon && <span className="filter-button__icon">{icon}</span>}
  </button>
);

FilterButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};
export default FilterButton;
