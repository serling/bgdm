import React from 'react';
import PropTypes from 'prop-types';
import anyToKebab from '@creuna/utils/any-to-kebab';

import Heading from '../../components/heading';
import GamesList from '../../components/games-list';
import Button from '../../components/button';
import LoadingSpinner from '../../components/loading-spinner';
import FilterControls from '../../components/filter-controls';
import Text from '../../components/text';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    lead: PropTypes.string,
    showControls: PropTypes.bool,
    showLoadMore: PropTypes.bool,
    gridColumns: PropTypes.number,
    gameTheme: PropTypes.string,
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
            systemIconName: anyToKebab(
              game.system.name.replace(/\s+/g, '-').toLowerCase()
            ),
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
        <div className="filtered-games-list__header">
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
          <Text
            size={Text.sizes.medium}
            text={this.props.lead}
            className="filtered-games-list__lead"
          />
        </div>
        {this.props.showControls && (
          <FilterControls
            disableControls={this.props.isFetching}
            onClickFilterBy={this.props.onClickFilterBy}
            onClickOrderBy={this.props.onClickOrderBy}
          />
        )}
        <div className="filtered-games-list__message">
          {this.props.numberOfResults === 0 &&
            !this.props.isFetching && <span>No matches found</span>}
        </div>
        <div className="filtered-games-list__results">
          {this.props.isFetching && (
            <div className="filtered-games-list__loading">
              <LoadingSpinner className="filtered-games-list__spinner" />
            </div>
          )}
          <GamesList
            heading={this.props.heading}
            games={this.state.filteredCollection}
            gridColumns={this.props.gridColumns}
            gameTheme={this.props.gameTheme}
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
      </div>
    );
  }
}

export default FilteredGamesList;
