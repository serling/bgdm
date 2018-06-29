import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../../components/heading';
import MainMenu from '../../components/main-menu';
import Button from '../../components/button';

class Header extends React.Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    linkSections: PropTypes.array
  };

  state = { isMenuOpen: this.props.isMenuOpen };

  handleMenuButtonClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    return (
      <div className={cn('header', this.props.className)}>
        <div className="header__logo">
          <Heading level={1}>ABCD</Heading>
        </div>
        <div className="header__button">
          <Button
            text="toggle menu"
            onClick={() => this.handleMenuButtonClick()}
            isActive={this.state.isMenuOpen}
            iconName="hamburger"
            iconNameActive="close"
          >
            Menu
          </Button>
        </div>
        {this.state.isMenuOpen && (
          <MainMenu
            className="header__menu"
            linkSections={this.props.linkSections}
          />
        )}
      </div>
    );
  }
}

export default Header;
