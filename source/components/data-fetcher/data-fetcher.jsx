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
    onClickOrderByName: () => this.handleClickOrderByName(),
    onClickOrderByDate: () => this.handleClickOrderByDate(),
    onClickOrderByScore: () => this.handleClickOrderByScore(),
    onClickLoadMore: () => this.handleClickLoadMore()
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
            collection: shouldAppend
              ? [...previousState.collection, ...payload.results]
              : payload.results,
            isFetching: false
          }));
        })
        .then(() => {
          console.log(
            'fetching from:',
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

  render() {
    return this.props.render({
      collection: this.state.collection.slice(
        0,
        this.state.numberOfItemsToFetch //TODO: remove this slice, should be handled by LIMIT
      ),
      isFetching: this.state.isFetching,
      onClickOrderByName: this.state.onClickOrderByName,
      onClickOrderByScore: this.state.onClickOrderByScore,
      onClickOrderByDate: this.state.onClickOrderByDate,
      onClickLoadMore: this.state.onClickLoadMore
    });
  }
}

export default DataFetcher;
