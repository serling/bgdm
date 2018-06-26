import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

import filters from './filters.json';

class FilterControls extends React.Component {
  static propTypes = {
    disableControls: PropTypes.bool,
    onClickOrderByName: PropTypes.func,
    onClickOrderByDate: PropTypes.func,
    onClickOrderByScore: PropTypes.func,
    onClickFilterBy: PropTypes.func
  };

  state = {
    activeDropdown: {} //TODO: only one open at a time
  };

  render() {
    return (
      <div className={'filter-controls'}>
        <List inline={true} className="filter-controls__filters">
          {filters.filters.map(filter => (
            <Dropdown
              options={filter.options}
              name={filter.id}
              disabled={this.props.disableControls}
              onClickFilterBy={this.props.onClickFilterBy}
              isOpen={false}
              theme={Dropdown.themes.primary}
            />
          ))}
        </List>
        <List inline={true} className="filter-controls__sorting">
          {this.props.onClickOrderByScore && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByScore}
              disabled={this.props.disableControls}
              text="rating"
              icon="👍"
            />
          )}
          {this.props.onClickOrderByDate && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByDate}
              disabled={this.props.disableControls}
              text="date"
            />
          )}
          {this.props.onClickOrderByName && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByName}
              disabled={this.props.disableControls}
              text="name"
            />
          )}
        </List>
      </div>
    );
  }
}

export default FilterControls;
