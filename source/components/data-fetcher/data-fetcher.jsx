import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired,
    searchQuery: PropTypes.string,
    activeOrder: PropTypes.string,
    activeFilters: PropTypes.array,
    numberOfItemsToFetch: PropTypes.number
  };

  static defaultProps = {
    numberOfItemsToFetch: 10,
    apiUrl: 'http://n.zawiarr.com/bgdm/api/games/',
    activeOrder: '-date',
    activeFilters: []
  };

  state = {
    isFetching: false,
    collection: [],
    activeOrder: this.props.activeOrder,
    activeFilters: this.props.activeFilters,
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    numberOfResults: 0,
    onClickLoadMore: () => this.handleClickLoadMore(),
    onClickFilterBy: (key, value) => this.handleClickFilterBy(key, value),
    onClickOrderBy: order => this.handleClickOrderBy(order)
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api
        .get(
          replaceQueryParameters(url, {
            ordering: this.state.activeOrder,
            limit: this.props.numberOfItemsToFetch, //TODO: make LIMIT work in query
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
    });
  }

  handleClickLoadMore() {
    if (this.state.nextPageUrl) {
      this.fetchData(this.state.nextPageUrl, true);
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
      () => this.fetchData(this.state.apiUrl)
    );
  }

  handleClickFilterBy(key, value) {
    let filter = {};
    filter[key] = value;

    this.setState(
      {
        activeFilters: Object.assign({}, this.state.activeFilters, filter)
      },
      () => this.fetchData(this.state.apiUrl)
    );
  }

  componentDidMount() {
    this.fetchData(this.state.apiUrl);
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
      onClickLoadMore: this.state.onClickLoadMore,
      onClickFilterBy: this.state.onClickFilterBy,
      onClickOrderBy: this.state.onClickOrderBy
    });
  }
}

export default DataFetcher;
