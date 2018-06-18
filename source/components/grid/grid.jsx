import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number
  };

  static defaultProps = {
    columns: 1
  };

  state = {};

  render() {
    return (
      <div className={cn('grid', [`grid--columns-${this.props.columns}`])}>
        {React.Children.map(this.props.children, (child, index) => (
          <div
            key={child.id || index}
            className={cn('grid__item', [`grid__item--number-${index + 1}`])}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
