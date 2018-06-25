import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import List from '../../components/list';
import Button from '../../components/button';

const themes = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

class Dropdown extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    disabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClickFilter: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
  };

  static defaultProps = {
    options: []
  };

  state = {
    activeOption: this.props.options[0],
    isOpen: this.props.isOpen
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
      <div className={cn('dropdown', `dropdown--${this.props.theme}`)}>
        <Button
          className="dropdown__selection"
          disabled={this.props.disabled}
          text={this.state.activeOption.name}
          onClick={() => this.handleClickOpenMenu()}
        />
        {this.state.isOpen && (
          <div className="dropdown__content">
            <List className="dropdown__list" inline={false}>
              {this.props.options.map((option, index) => (
                <div key={index} className="dropdown__option">
                  <Button
                    disabled={
                      this.props.disabled || option === this.state.activeOption
                    }
                    theme={Button.themes.dropdown}
                    text={option.name}
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

Dropdown.defaultProps = {
  theme: themes.default
};

Dropdown.themes = themes;

export default Dropdown;
