import React from 'react';
import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';

class Hero extends React.Component {
  static propTypes = {
    main: PropTypes.object,
    highlights: PropTypes.object
  };

  state = {};

  componentDidMount() {
    //TODO: fetch in filtered-games-list, remove games from props here
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__main">
          <FilteredGamesList
            {...this.props.main}
            gridColumns={1}
            initialNumberOfItemsToLoad={1}
          />
        </div>
        <div className="hero__highlights">
          <FilteredGamesList
            {...this.props.highlights}
            gridColumns={3}
            initialNumberOfItemsToLoad={3}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
