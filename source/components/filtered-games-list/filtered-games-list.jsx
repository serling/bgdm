import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../../components/games-list';
import Heading from '../../components/heading';
import FilterControls from '../../components/filter-controls';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    games: PropTypes.array.isRequired,
    showControls: PropTypes.bool
  };

  state = {
    filteredGames: this.props.games
  };

  render() {
    return (
      <div className="filtered-games-list">
        <Heading theme={Heading.themes.linethrough}>
          {this.props.heading}
        </Heading>
        {this.props.showControls && <FilterControls />}
        <GamesList
          heading={this.props.heading}
          games={this.state.filteredGames}
        />
      </div>
    );
  }
}

export default FilteredGamesList;
