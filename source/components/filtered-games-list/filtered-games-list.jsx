/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../../components/games-list';
import Heading from '../../components/heading';
import Button from '../../components/button';
import FilterControls from '../../components/filter-controls';
import api from '../../js/api-helper';

class FilteredGamesList extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    showControls: PropTypes.bool,
    gridColumns: PropTypes.number,
    buttonPlacement: PropTypes.string,
    apiUrl: PropTypes.string,
    initialNumberOfItemsToLoad: PropTypes.number.isRequired,
    numberOfItemsToLoad: PropTypes.number,
    showLoadMoreButton: PropTypes.bool
  };

  static defaultProps = {
    numberOfItemsToLoad: 1
  };

  state = {
    initialNumberOfItemsToLoad: this.props.initialNumberOfItemsToLoad,
    numberOfItemsToLoad: this.props.numberOfItemsToLoad,
    apiUrl: this.props.apiUrl,
    isFetching: false,
    nextPageUrl: '',
    previousPageUrl: '',
    numberOfResults: 0,
    filteredGames: [],
    activeSort: ''
  };

  fetchGames() {
    this.setState({ isFetching: true }, () => {
      api.get(this.state.apiUrl + this.state.activeSort).then(payload => {
        this.setState({
          numberOfResults: payload.count,
          nextPageUrl: payload.next,
          previousPageUrl: payload.previous,
          filteredGames: payload.results.map(game => {
            return this.pickAttributes(game);
          }),
          isFetching: false
        });
      });
    });
  }

  getIndexImage(arrayOfImages) {
    return arrayOfImages.filter(image => image.index);
  }

  getTitleImage(arrayOfImages) {
    return arrayOfImages.filter(image => image.title);
  }

  getRandomGameId() {
    return 4;
  }

  handleClickSortByDate() {
    let sort = {
      ascending: '?&ordering=date',
      descending: '?&ordering=-date'
    };

    this.setState(
      {
        activeSort:
          this.state.activeSort === sort.ascending
            ? sort.descending
            : sort.ascending
      },
      () => this.fetchGames()
    );
  }

  handleClickSortByScore() {
    let sort = {
      ascending: '?&ordering=-autoscore',
      descending: '?&ordering=autoscore'
    };

    this.setState(
      {
        activeSort:
          this.state.activeSort === sort.ascending
            ? sort.descending
            : sort.ascending
      },
      () => this.fetchGames()
    );
  }

  handleClickSortByName() {
    let sort = {
      ascending: '?&ordering=name',
      descending: '?&ordering=-name'
    };

    this.setState(
      {
        activeSort:
          this.state.activeSort === sort.ascending
            ? sort.descending
            : sort.ascending
      },
      () => this.fetchGames()
    );
  }

  pickAttributes(game) {
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

  UNSAFE_componentWillReceiveProps() {
    this.fetchGames();
  }

  componentDidMount() {
    this.fetchGames();
  }

  handleLoadMoreButtonClick() {
    this.setState({ isFetching: true }, () => {
      api.get(this.state.nextPageUrl).then(payload => {
        this.setState(previousState => ({
          numberOfResults: payload.count,
          nextPageUrl: payload.next,
          previousPageUrl: payload.previous,
          filteredGames: [
            ...previousState.filteredGames,
            ...payload.results.map(game => {
              return this.pickAttributes(game);
            })
          ],
          isFetching: false
        }));
      });
    });
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
        {this.state.isFetching && (
          <div className="filtered-games-list__loading">
            <div className="filtered-games-list__loading-spinner">
              loading...
            </div>
          </div>
        )}
        {this.props.showControls && (
          <FilterControls
            placement={this.props.buttonPlacement}
            buttonsDisabled={this.state.isFetching}
            onClickSortByDate={() => this.handleClickSortByDate()}
            onClickSortByName={() => this.handleClickSortByName()}
            onClickSortByScore={() => this.handleClickSortByScore()}
          />
        )}
        <GamesList
          heading={this.props.heading}
          games={this.state.filteredGames}
          gridColumns={this.props.gridColumns}
        />
        {this.props.showLoadMoreButton && (
          <Button
            disabled={this.state.isFetching}
            onClick={() => this.handleLoadMoreButtonClick()}
          >
            More
          </Button>
        )}
      </div>
    );
  }
}

export default FilteredGamesList;
