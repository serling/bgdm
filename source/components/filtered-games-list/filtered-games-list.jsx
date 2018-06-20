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
    buttonPlacement: PropTypes.string,
    // initialNumberOfItemsToLoad: PropTypes.number,
    // numberOfItemsToLoad: PropTypes.number,
    // loadMoreShouldReplaceItems: PropTypes.bool,
    showLoadMoreButton: PropTypes.bool
  };

  static defaultProps = {
    // initialNumberOfItemsToLoad: 10,
    // numberOfItemsToLoad: 10
  };

  state = {
    filteredGames: this.props.games //set filtered games: []
  };

  componentDidMount() {
    //fetch games from service
  }

  handleLoadMoreButtonClick() {}

  render() {
    return (
      <div className="filtered-games-list">
        <Heading
          level={2}
          theme={Heading.themes.linethrough}
          className="filtered-games-list__heading"
        >
          {this.props.heading}
        </Heading>
        {this.props.showControls && (
          <FilterControls placement={this.props.buttonPlacement} />
        )}
        <GamesList
          heading={this.props.heading}
          games={this.state.filteredGames}
          gridColumns={this.props.gridColumns}
        />
        {this.props.showLoadMoreButton && (
          <Button onClick={() => this.handleLoadMoreButtonClick()}>More</Button>
        )}
      </div>
    );
  }
}

export default FilteredGamesList;
