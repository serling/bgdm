import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Grid from '../../components/grid';
import LinkList from '../../components/link-list';

class MainMenu extends React.Component {
  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    linkSections: PropTypes.array
  };

  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={cn('main-menu', this.props.className)}>
        <Grid columns={4}>
          {this.props.linkSections.map((section, index) => (
            <LinkList key={section.id || index} {...section} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default MainMenu;
