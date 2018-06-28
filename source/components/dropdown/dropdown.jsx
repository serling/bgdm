import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import List from '../../components/list';
import Button from '../../components/button';
import Icon from '../../components/icon';

const themes = {
  default: 'default',
  system: 'system',
  user: 'user',
  developer: 'developer',
  year: 'year',
  genre: 'genre'
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
    id: PropTypes.string.isRequired,
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
    this.props.onClickFilterBy(this.props.id, id);
  }

  render() {
    return (
      <div className={cn('dropdown', `dropdown--${this.props.theme}`)}>
        <div className="dropdown__header">{this.props.name}</div>
        <Button
          className="dropdown__selection"
          disabled={this.props.disabled}
          text={this.state.activeOption.name}
          onClick={() => this.handleClickOpenMenu()}
        />
        {this.state.isOpen && (
          <React.Fragment>
            <Icon
              name="arrow-up"
              className="dropdown__arrow"
              size={Icon.sizes.tiny}
            />
            <div
              className={cn('dropdown__content', {
                'dropdown__content--has-focus': this.state.isOpen
              })}
            >
              <List className="dropdown__list">
                {this.props.options.map(option => (
                  <div
                    key={option.id}
                    className={cn('dropdown__option', {
                      'dropdown__option--active':
                        option === this.state.activeOption
                    })}
                  >
                    <Button
                      disabled={
                        this.props.disabled ||
                        option === this.state.activeOption
                      }
                      theme={Button.themes.dropdown}
                      text={option.name}
                      onClick={() => this.handleOnClickFilter(option.id)}
                    />
                  </div>
                ))}
              </List>
            </div>
          </React.Fragment>
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
