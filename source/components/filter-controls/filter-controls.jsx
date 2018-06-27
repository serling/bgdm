import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

import apiFilters from './filters.json';
import apiSorting from './sortings.json';

class FilterControls extends React.Component {
  static propTypes = {
    disableControls: PropTypes.bool,
    onClickFilterBy: PropTypes.func,
    onClickOrderBy: PropTypes.func
  };

  state = {
    activeDropdown: {} //TODO: only one open at a time
  };

  render() {
    return (
      <div className={'filter-controls'}>
        <List inline={true} className="filter-controls__filters">
          {apiFilters.filters.map(filter => (
            <Dropdown
              options={filter.options}
              id={filter.id}
              name={filter.name}
              disabled={this.props.disableControls}
              onClickFilterBy={this.props.onClickFilterBy}
              isOpen={false}
              theme={Dropdown.themes.primary}
            />
          ))}
        </List>
        <List inline={true} className="filter-controls__sorting">
          {apiSorting.sortings.map(sorting => (
            <Button
              theme={Button.themes.filter}
              onClick={() => this.props.onClickOrderBy(sorting.id)}
              disabled={this.props.disableControls}
              text={sorting.name}
              // icon="👍"
            />
          ))}
        </List>
      </div>
    );
  }
}

export default FilterControls;
