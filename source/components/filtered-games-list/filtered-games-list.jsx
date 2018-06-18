import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../../components/games-list';
import Heading from '../../components/heading';
import Button from '../../components/button';
import FilterControls from '../../components/filter-controls';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    games: PropTypes.array.isRequired,
    showControls: PropTypes.bool,
    gridColumns: PropTypes.number,
    initialNumberOfItemsToLoad: PropTypes.number,
    numberOfItemsToLoad: PropTypes.number,
    showLoadMoreButton: PropTypes.bool
    // replace or append to collection? Load-more button can be the random pick loader
  };

  static defaultProps = {
    initialNumberOfItemsToLoad: 10,
    numberOfItemsToLoad: 10
  };

  state = {
    filteredGames: this.props.games //fetch games from service, set filtered games: []
  };

  handleButtonClick() {
    console.log(
      'populating list',
      this.props.initialNumberOfItemsToLoad,
      this.props.numberOfItemsToLoad
    );
  }

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
          gridColumns={this.props.gridColumns}
        />
        {this.props.showLoadMoreButton && (
          <Button onClick={() => this.handleButtonClick()}>More</Button>
        )}
      </div>
    );
  }
}

export default FilteredGamesList;
