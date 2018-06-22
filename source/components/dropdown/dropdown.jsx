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
    activeOption: PropTypes.object,
    onClickFilterBySystem: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: [],
    activeOption: { id: 'none', value: '---select---' }
  };

  state = {
    activeOption: this.props.activeOption,
    isOpen: false
  };

  handleClickOpenMenu() {
    this.setState(previousState => ({
      isOpen: !previousState.isOpen
    }));
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__selection">
          <Button
            text={this.state.activeOption.value}
            onClick={() => this.handleClickOpenMenu()}
          />
        </div>
        {/* {this.state.isOpen && ( */}
        <div className="dropdown__list">
          <List>
            {this.props.options.map((option, index) => (
              <div key={index} className="dropdown__option">
                <Button
                  text={option.value}
                  onClick={() => this.props.onClickFilterBySystem()}
                />
              </div>
            ))}
          </List>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Dropdown;
