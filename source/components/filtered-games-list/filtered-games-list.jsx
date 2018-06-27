import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading';
import GamesList from '../../components/games-list';
import Button from '../../components/button';
import LoadingSpinner from '../../components/loading-spinner';
import FilterControls from '../../components/filter-controls';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    showControls: PropTypes.bool,
    showLoadMore: PropTypes.bool,
    gridColumns: PropTypes.number,
    showNumerOfResults: PropTypes.bool,
    isFetching: PropTypes.bool,
    collection: PropTypes.array,
    numberOfResults: PropTypes.number,
    onClickLoadMore: PropTypes.func,
    onClickFilterBy: PropTypes.func,
    onClickOrderBy: PropTypes.func
    //TODO: another abstraction -> heading, controls, buttons, grid
  };

  static defaultProps = {
    collection: []
  };

  state = {
    filteredCollection: []
  };

  getIndexImage(arrayOfImages) {
    return arrayOfImages.filter(image => image.index);
  }

  getTitleImage(arrayOfImages) {
    return arrayOfImages.filter(image => image.title);
  }

  filterCollection() {
    this.setState({
      filteredCollection: this.props.collection.map(game => {
        return Object.assign(
          {},
          {
            id: game.id,
            href: `/games/${game.id}`,
            score: game.autoscore,
            title: game.name,
            system: game.system.name,
            tagline: game.tagline,
            imgSrc: this.getIndexImage(game.images)[0].image
          }
        );
      })
    });
  }

  componentDidMount() {
    this.filterCollection();
  }

  //TODO: smarter comparison?
  componentDidUpdate(prevProps) {
    if (this.props.collection !== prevProps.collection) {
      this.filterCollection();
    }
  }

  render() {
    return (
      <div className="filtered-games-list">
        <Heading
          level={2}
          theme={Heading.themes.linethrough}
          className="filtered-games-list__heading"
        >
          {this.props.heading}
          {this.props.showNumerOfResults && (
            <span> ({this.props.numberOfResults})</span>
          )}
        </Heading>
        {this.props.isFetching && (
          <div className="filtered-games-list__loading">
            <LoadingSpinner />
          </div>
        )}
        {this.props.showControls && (
          <FilterControls
            disableControls={this.props.isFetching}
            onClickFilterBy={this.props.onClickFilterBy}
            onClickOrderBy={this.props.onClickOrderBy}
          />
        )}
        {this.props.numberOfResults === 0 && (
          <div className="filtered-games-list__message">No matches found</div>
        )}
        <GamesList
          heading={this.props.heading}
          games={this.state.filteredCollection}
          gridColumns={this.props.gridColumns}
        />
        {this.props.showLoadMore && (
          <Button
            disabled={this.props.isFetching}
            onClick={this.props.onClickLoadMore}
          >
            More
          </Button>
        )}
      </div>
    );
  }
}

export default FilteredGamesList;
