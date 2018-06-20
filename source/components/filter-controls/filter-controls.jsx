import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import List from '../../components/list';
import Button from '../../components/button';

const placements = {
  left: 'left',
  center: 'center',
  right: 'right'
};

class FilterControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.oneOf(
      Object.keys(placements).map(key => placements[key])
    ),
    onClickSortByName: PropTypes.func,
    onClickSortByDate: PropTypes.func,
    onClickSortByScore: PropTypes.func
  };

  static defaultProps = {
    placement: placements.left
  };

  state = { tmp: {} };

  render() {
    return (
      <div
        className={cn(
          'filter-controls',
          `filter-controls--aligned-${this.props.placement}`,
          this.props.className
        )}
      >
        <List inline={true}>
          {this.props.onClickSortByScore && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickSortByScore}
              text="rating"
              icon="👍"
            />
          )}
          {this.props.onClickSortByDate && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickSortByDate}
              text="date"
            />
          )}
          {this.props.onClickSortByName && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickSortByName}
              text="name"
            />
          )}
        </List>
      </div>
    );
  }
}

FilterControls.placements = placements;

export default FilterControls;
