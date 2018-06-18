import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Title from '../../components/title';

class Header extends React.Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    className: PropTypes.string
  };

  state = { isMenuOpen: this.props.isMenuOpen };

  render() {
    return (
      <div className={cn('header', this.props.className)}>
        <Title>ABCD</Title>
        <Title>EFGH</Title>
      </div>
    );
  }
}

export default Header;
