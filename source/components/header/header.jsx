import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Title from '../../components/title';
import MainMenu from '../../components/main-menu';
import Button from '../../components/button';

class Header extends React.Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    className: PropTypes.string,
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
          <Title>ABCD</Title>
        </div>
        <div className="header__button">
          <Button onClick={() => this.handleMenuButtonClick()}>Menu</Button>
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
