import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import queryStrings from './query-strings.json';
import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired,
    numberOfItemsToFetch: PropTypes.number
  };

  static defaultProps = {
    numberOfItemsToFetch: 10
  };

  state = {
    isFetching: false,
    collection: [],
    numberOfItemsToFetch: this.props.numberOfItemsToFetch,
    activeOrder: queryStrings.orderBy.score.descending,
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    numberOfResults: 0,
    onClickLoadMore: () => this.handleClickLoadMore(),
    onClickOrderByName: () => this.handleClickOrderByName(),
    onClickOrderByDate: () => this.handleClickOrderByDate(),
    onClickOrderByScore: () => this.handleClickOrderByScore(),
    onClickFilterBySystem: () => this.handleClickFilterBySystem()
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api
        .get(
          replaceQueryParameters(url, {
            ordering: this.state.activeOrder,
            limit: this.state.numberOfItemsToFetch //TODO: make LIMIT work in query
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
        })
        .then(() => {
          console.log(
            'fetched from:',
            replaceQueryParameters(url, {
              ordering: this.state.activeOrder,
              limit: this.state.numberOfItemsToFetch
            })
          );
        });
    });
  }

  handleClickLoadMore() {
    this.fetchData(this.state.nextPageUrl, true);
  }

  handleClickOrderByName() {
    this.setOrderByState('name');
  }

  handleClickOrderByDate() {
    this.setOrderByState('date');
  }

  handleClickOrderByScore() {
    this.setOrderByState('score');
  }

  HandleClickFilterBySystem() {
    console.log('filter by system:');
  }

  handleSearchQuery(parameter) {
    //TODO: implement
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
  }

  render() {
    return this.props.render({
      collection: this.state.collection,
      isFetching: this.state.isFetching,
      numberOfResults: this.state.numberOfResults,
      onClickOrderByName: this.state.onClickOrderByName,
      onClickOrderByScore: this.state.onClickOrderByScore,
      onClickOrderByDate: this.state.onClickOrderByDate,
      onClickLoadMore: this.state.onClickLoadMore,
      onClickFilterBySystem: this.state.onClickFilterBySystem
    });
  }
}

export default DataFetcher;
