import React from 'react';
import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';

class AllGames extends React.Component {
  static propTypes = {
    games: PropTypes.object
  };

  state = {};

  componentDidMount() {
    //TODO: fetch in filtered-games-list, remove games from props here
  }

  render() {
    return (
      <div className="all-games">
        <FilteredGamesList
          showControls={true}
          buttonPlacement={'center'}
          showLoadMoreButton={true}
          gridColumns={4}
          {...this.props.games}
        />
      </div>
    );
  }
}

export default AllGames;
