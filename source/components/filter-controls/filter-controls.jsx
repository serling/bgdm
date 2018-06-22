import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import List from '../../components/list';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

//TODO: move this to games list?
const placements = {
  left: 'left',
  center: 'center',
  right: 'right'
};

class FilterControls extends React.Component {
  static propTypes = {
    buttonsDisabled: PropTypes.bool,
    className: PropTypes.string,
    placement: PropTypes.oneOf(
      Object.keys(placements).map(key => placements[key])
    ),
    onClickOrderByName: PropTypes.func,
    onClickOrderByDate: PropTypes.func,
    onClickOrderByScore: PropTypes.func,
    onClickFilterBySystem: PropTypes.func
  };

  static defaultProps = {
    placement: placements.left
  };

  alternatives = [
    {
      id: 'asdasd',
      value: 'hello'
    },
    {
      id: '4t34t',
      value: 'option 2'
    },
    {
      id: 'fsgh567',
      value: 'longer text'
    }
  ];

  state = {};

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
          {this.props.onClickFilterBySystem && (
            <Dropdown
              options={this.alternatives}
              onClickFilterBySystem={this.props.onClickFilterBySystem}
            />
          )}
          {this.props.onClickOrderByScore && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByScore}
              disabled={this.props.buttonsDisabled}
              text="rating"
              icon="👍"
            />
          )}
          {this.props.onClickOrderByDate && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByDate}
              disabled={this.props.buttonsDisabled}
              text="date"
            />
          )}
          {this.props.onClickOrderByName && (
            <Button
              theme={Button.themes.filter}
              onClick={this.props.onClickOrderByName}
              disabled={this.props.buttonsDisabled}
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
