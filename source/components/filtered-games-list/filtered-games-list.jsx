import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading';
import GamesList from '../../components/games-list';
import Button from '../../components/button';
import FilterControls from '../../components/filter-controls';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    showControls: PropTypes.bool,
    buttonPlacement: PropTypes.string,
    gridColumns: PropTypes.number,
    isFetching: PropTypes.bool,
    collection: PropTypes.array,
    onClickOrderByName: PropTypes.func,
    onClickOrderByDate: PropTypes.func,
    onClickOrderByScore: PropTypes.func,
    onClickLoadMore: PropTypes.func
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

  pickProperties(game) {
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
  }

  filterCollection() {
    this.setState({
      filteredCollection: this.props.collection.map(game => {
        return this.pickProperties(game);
      })
    });
  }

  componentDidMount() {
    this.filterCollection();
  }

  //TODO: this logic should be better
  componentDidUpdate(prevProps, prevState) {
    if (this.props.collection === prevProps.collection) return;
    this.filterCollection();
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
        </Heading>
        {this.props.isFetching && (
          <div className="filtered-games-list__loading">
            <div className="filtered-games-list__loading-spinner">
              LOADING...
            </div>
          </div>
        )}
        {this.props.showControls && (
          <FilterControls
            placement={this.props.buttonPlacement}
            buttonsDisabled={this.props.isFetching}
            onClickOrderByDate={this.props.onClickOrderByDate}
            onClickOrderByName={this.props.onClickOrderByName}
            onClickOrderByScore={this.props.onClickOrderByScore}
          />
        )}
        <GamesList
          heading={this.props.heading}
          games={this.state.filteredCollection}
          gridColumns={this.props.gridColumns}
        />
        {this.props.onClickLoadMore && (
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
