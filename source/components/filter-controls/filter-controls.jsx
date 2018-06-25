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
    onClickFilterBySystem: PropTypes.func,
    onClickFilterByDeveloper: PropTypes.func,
    // onClickFilterByPublisher: PropTypes.func,
    onClickFilterByGenre: PropTypes.func,
    onClickFilterByUser: PropTypes.func,
    onClickFilterByYear: PropTypes.func
  };

  state = {};

  render() {
    return (
      <div className={'filter-controls'}>
        <List inline={true} className="filter-controls__filters">
          {this.props.onClickFilterBySystem && (
            <Dropdown
              options={filters.systems}
              disabled={this.props.disableControls}
              onClickFilter={this.props.onClickFilterBySystem}
            />
          )}
          {this.props.onClickFilterByGenre && (
            <Dropdown
              options={filters.genres}
              disabled={this.props.disableControls}
              onClickFilter={this.props.onClickFilterByGenre}
            />
          )}
          {this.props.onClickFilterByUser && (
            <Dropdown
              options={filters.users}
              disabled={this.props.disableControls}
              onClickFilter={this.props.onClickFilterByUser}
            />
          )}
          {this.props.onClickFilterByYear && (
            <Dropdown
              options={filters.years}
              disabled={this.props.disableControls}
              onClickFilter={this.props.onClickFilterByYear}
            />
          )}
          {this.props.onClickFilterByDeveloper && (
            <Dropdown
              options={filters.developers}
              disabled={this.props.disableControls}
              onClickFilter={this.props.onClickFilterByDeveloper}
            />
          )}
          {/* {this.props.onClickFilterByPublisher && (
            <Dropdown
              options={filters.publishers}
              disabled={this.props.disableControls}
              onClickFilterBySystem={this.props.onClickFilterByPublisher}
            />
          )}
           */}
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
