import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import List from '../../components/list';
import Button from '../../components/button';

class FilterControls extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {};

  render() {
    return (
      <div className={cn('filter-controls', this.props.className)}>
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

export default FilterControls;
