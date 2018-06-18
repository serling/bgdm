import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import FilterButton from '../../components/filter-button';

class FilterControls extends React.Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="filter-controls">
        <List inline={true}>
          <FilterButton text="func #1" icon="👍" />
          <FilterButton text="func #2" />
          <FilterButton text="func #3" />
        </List>
      </div>
    );
  }
}

export default FilterControls;
