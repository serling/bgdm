import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list';
import Button from '../../components/button';

class Dropdown extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    disabled: PropTypes.bool,
    onClickFilter: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: []
  };

  state = {
    activeOption: this.props.options[0],
    isOpen: false
  };

  toggleMenu() {
    this.setState(previousState => ({
      isOpen: !previousState.isOpen
    }));
  }

  handleClickOpenMenu() {
    this.toggleMenu();
  }

  handleOnClickFilter(id, index) {
    this.toggleMenu();
    this.setState({
      activeOption: this.props.options[index]
    });
    this.props.onClickFilter(id);
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__selection">
          <Button
            disabled={this.props.disabled}
            text={this.state.activeOption.name.toString()}
            onClick={() => this.handleClickOpenMenu()}
          />
        </div>
        {this.state.isOpen && (
          <div className="dropdown__list">
            <List>
              {this.props.options.map((option, index) => (
                <div key={index} className="dropdown__option">
                  <Button
                    disabled={
                      this.props.disabled || option === this.state.activeOption
                    }
                    text={option.name.toString()}
                    onClick={() => this.handleOnClickFilter(option.id, index)}
                  />
                </div>
              ))}
            </List>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
