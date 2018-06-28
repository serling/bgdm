import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

import apiFilters from './filters.json';
import apiOrdering from './ordering.json';

const FilterControls = ({
  disableControls,
  onClickFilterBy,
  onClickOrderBy
}) => (
  <div className={'filter-controls'}>
    <List inline={true} className="filter-controls__filters">
      {apiFilters.filters.map(filter => (
        <Dropdown
          key={filter.id}
          options={filter.options}
          id={filter.id}
          name={filter.name}
          disabled={disableControls}
          onClickFilterBy={onClickFilterBy}
          isOpen={false}
          theme={Dropdown.themes[filter.theme]}
        />
      ))}
    </List>
    <List inline={true} className="filter-controls__ordering">
      {apiOrdering.orders.map(order => (
        <Button
          key={order.id}
          iconName={order.iconName}
          iconNameActive={order.iconNameActive}
          theme={Button.themes.filter}
          onClick={() => onClickOrderBy(order)}
          disabled={disableControls}
          text={order.name}
        />
      ))}
    </List>
  </div>
);

FilterControls.propTypes = {
  disableControls: PropTypes.bool,
  onClickFilterBy: PropTypes.func,
  onClickOrderBy: PropTypes.func
};

export default FilterControls;
