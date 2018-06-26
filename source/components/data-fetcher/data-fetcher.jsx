import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import queryStrings from './query-strings.json';
import api from '../../js/api-helper';

const filters = {
  system: 'system',
  genre: 'genre',
  user: 'score__reviewer',
  year: 'year',
  developer: 'developer'
};

const sortings = {
  name: 'name',
  score: 'score',
  date: 'date'
};

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired,
    searchQuery: PropTypes.string,
    numberOfItemsToFetch: PropTypes.number
  };

  static defaultProps = {
    numberOfItemsToFetch: 10,
    apiUrl: 'http://n.zawiarr.com/bgdm/api/games/'
  };

  state = {
    isFetching: false,
    collection: [],
    numberOfItemsToFetch: this.props.numberOfItemsToFetch,
    activeOrder: queryStrings.orderBy.score.descending,
    activeFilters: {},
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    numberOfResults: 0,
    onClickLoadMore: () => this.handleClickLoadMore(),
    onClickOrderByName: () => this.handleClickOrderByName(),
    onClickOrderByDate: () => this.handleClickOrderByDate(),
    onClickOrderByScore: () => this.handleClickOrderByScore(),
    onClickFilterBySystem: system => this.handleClickFilterBySystem(system),
    onClickFilterByUser: user => this.handleClickFilterByUser(user),
    onClickFilterByGenre: genre => this.handleClickFilterByGenre(genre),
    onClickFilterByPublisher: publisher =>
      this.handleClickFilterByPublisher(publisher),
    onClickFilterByDeveloper: developer =>
      this.handleClickFilterByDeveloper(developer),
    onClickFilterByYear: year => this.handleClickFilterByYear(year)
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api
        .get(
          replaceQueryParameters(url, {
            ordering: this.state.activeOrder,
            limit: this.state.numberOfItemsToFetch, //TODO: make LIMIT work in query
            search: this.props.searchQuery,
            ...this.state.activeFilters
          })
        )
        .then(payload => {
          this.setState(previousState => ({
            nextPageUrl: payload.next,
            previousPageUrl: payload.previous,
            numberOfResults: payload.count,
            collection: shouldAppend
              ? [...previousState.collection, ...payload.results]
              : payload.results,
            isFetching: false
          }));
        });
      // .then(() => {
      //   console.log(
      //     //TODO: remove
      //     'fetched from:',
      //     replaceQueryParameters(url, {
      //       ordering: this.state.activeOrder,
      //       limit: this.state.numberOfItemsToFetch,
      //       search: this.props.searchQuery,
      //       ...this.state.activeFilters
      //     })
      //   );
      // });
    });
  }

  //TODO: remove LOAD MORE if there are no more pages left
  handleClickLoadMore() {
    if (this.state.nextPageUrl) {
      this.fetchData(this.state.nextPageUrl, true);
    }
  }

  handleClickOrderByName() {
    this.setOrderByState(sortings.name);
  }

  handleClickOrderByDate() {
    this.setOrderByState(sortings.date);
  }

  handleClickOrderByScore() {
    this.setOrderByState(sortings.date);
  }

  handleClickFilterBySystem(value) {
    this.setFilterByState(filters.system, value);
  }

  handleClickFilterByUser(value) {
    this.setFilterByState(filters.user, value);
  }

  handleClickFilterByGenre(value) {
    this.setFilterByState(filters.genre, value);
  }

  handleClickFilterByDeveloper(value) {
    this.setFilterByState(filters.developer, value);
  }

  handleClickFilterByYear(value) {
    this.setFilterByState(filters.year, value);
  }

  // handleClickFilterByPublisher(value) {
  //   this.setFilterByState('publisher', value);
  // }

  setFilterByState(key, value) {
    let filter = {};
    filter[key] = value;

    this.setState(
      {
        activeFilters: Object.assign({}, this.state.activeFilters, filter)
      },
      () => this.fetchData(this.state.apiUrl)
    );
  }

  setOrderByState(orderType) {
    this.setState(
      {
        activeOrder:
          this.state.activeOrder === queryStrings.orderBy[orderType].ascending
            ? queryStrings.orderBy[orderType].descending
            : queryStrings.orderBy[orderType].ascending
      },
      () => this.fetchData(this.state.apiUrl)
    );
  }

  componentDidMount() {
    this.fetchData(this.state.apiUrl);
  }

  //TODO: fix this
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.apiUrl !== nextProps.apiUrl) {
      return {
        apiUrl: nextProps.apiUrl
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.apiUrl !== prevProps.apiUrl) {
      this.fetchData(this.state.apiUrl);
    }

    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.fetchData(this.state.apiUrl);
    }
  }

  render() {
    return this.props.render({
      collection: this.state.collection,
      isFetching: this.state.isFetching,
      showLoadMore: this.state.nextPageUrl ? true : false,
      numberOfResults: this.state.numberOfResults,
      onClickOrderByName: this.state.onClickOrderByName,
      onClickOrderByScore: this.state.onClickOrderByScore,
      onClickOrderByDate: this.state.onClickOrderByDate,
      onClickLoadMore: this.state.onClickLoadMore,
      onClickFilterBySystem: this.state.onClickFilterBySystem,
      onClickFilterByUser: this.state.onClickFilterByUser,
      onClickFilterByGenre: this.state.onClickFilterByGenre,
      onClickFilterByPublisher: this.state.onClickFilterByPublisher,
      onClickFilterByDeveloper: this.state.onClickFilterByDeveloper,
      onClickFilterByYear: this.state.onClickFilterByYear
    });
  }
}

export default DataFetcher;
