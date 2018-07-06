import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';
import anyToKebab from '@creuna/utils/any-to-kebab';

import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired,
    searchQuery: PropTypes.string,
    activeOrder: PropTypes.string,
    activeFilters: PropTypes.array,
    numberOfItemsToFetch: PropTypes.number,
    gameId: PropTypes.string
  };

  static defaultProps = {
    numberOfItemsToFetch: 12,
    apiUrl: 'http://n.zawiarr.com/bgdm/api/games/',
    activeOrder: '-date',
    activeFilters: []
  };

  state = {
    isFetching: false,
    collection: [],
    activeOrder: this.props.activeOrder,
    activeFilters: this.props.activeFilters,
    activeGameId: this.props.gameId,
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    numberOfResults: 0,
    onClickLoadMore: () => this.handleClickLoadMore(),
    onClickFilterBy: (key, value) => this.handleClickFilterBy(key, value),
    onClickOrderBy: order => this.handleClickOrderBy(order)
  };

  parseUrl(url) {
    return replaceQueryParameters(url, {
      ordering: this.state.activeOrder,
      limit: this.props.numberOfItemsToFetch, //TODO: make LIMIT work in query
      search: this.props.searchQuery,
      ...this.state.activeFilters
    });
  }

  pickGameAttributes(games) {
    return games.map(game => {
      return Object.assign(
        {},
        {
          id: `${game.id}`,
          href: `/games/${game.id}`,
          autoscore: `${game.autoscore}`,
          name: game.name,
          systemIconName: anyToKebab(
            game.system.name.replace(/\s+/g, '-').toLowerCase()
          ),
          tagline: game.tagline,
          indexImgSrc: game.images.filter(image => image.index)[0].image,
          titleImgSrc: game.images.filter(image => image.title)[0].image
        }
      );
    });
  }

  getGames(url, shouldAppend) {
    this.setState({ isFetching: true }, () => {
      api.get(this.parseUrl(url)).then(payload => {
        this.setState(previousState => ({
          nextPageUrl: payload.next,
          previousPageUrl: payload.previous,
          numberOfResults: payload.count,
          collection: shouldAppend
            ? [
                ...previousState.collection,
                ...this.pickGameAttributes(payload.results)
              ]
            : [...this.pickGameAttributes(payload.results)],
          isFetching: false
        }));
      });
    });
  }

  handleClickLoadMore() {
    if (this.state.nextPageUrl) {
      this.getGames(this.state.nextPageUrl, true);
    }
  }

  handleClickOrderBy(order) {
    order.isActive = !order.isActive;

    this.setState(
      previousState => ({
        activeOrder:
          previousState.activeOrder === order.options.ascending
            ? order.options.descending
            : order.options.ascending
      }),
      () => this.getGames(this.state.apiUrl)
    );
  }

  handleClickFilterBy(key, value) {
    let filter = {};
    filter[key] = value;

    this.setState(
      {
        activeFilters: Object.assign({}, this.state.activeFilters, filter)
      },
      () => this.getGames(this.state.apiUrl)
    );
  }

  componentDidMount() {
    this.getGames(this.state.apiUrl);
  }

  componentDidUpdate(prevProps) {
    if (this.props.apiUrl !== prevProps.apiUrl) {
      this.getGames(this.state.apiUrl);
    }

    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.getGames(this.state.apiUrl);
    }
  }

  render() {
    return this.props.render({
      collection: this.state.collection,
      isFetching: this.state.isFetching,
      showLoadMore: this.state.nextPageUrl ? true : false,
      numberOfResults: this.state.numberOfResults,
      onClickLoadMore: this.state.onClickLoadMore,
      onClickFilterBy: this.state.onClickFilterBy,
      onClickOrderBy: this.state.onClickOrderBy
    });
  }
}

export default DataFetcher;
