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
    )
  };

  static defaultProps = {
    placement: placements.left
  };

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
          <Button
            theme={Button.themes.filter}
            onClick={() => undefined}
            text="rating"
            icon="👍"
          />
          <Button
            theme={Button.themes.filter}
            onClick={() => undefined}
            text="date"
          />
          <Button
            theme={Button.themes.filter}
            onClick={() => undefined}
            text="sys"
          />
        </List>
      </div>
    );
  }
}

FilterControls.placements = placements;

export default FilterControls;
