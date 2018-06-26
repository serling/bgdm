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
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClickFilterBy: PropTypes.func.isRequired,
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

  handleOnClickFilter(id) {
    this.toggleMenu();
    this.setState({
      activeOption: this.props.options.filter(option => option.id === id)[0]
    });
    this.props.onClickFilterBy(this.props.name, id);
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
              {this.props.options.map(option => (
                <div key={option.id} className="dropdown__option">
                  <Button
                    disabled={
                      this.props.disabled || option === this.state.activeOption
                    }
                    theme={Button.themes.dropdown}
                    text={option.name}
                    onClick={() => this.handleOnClickFilter(option.id)}
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
