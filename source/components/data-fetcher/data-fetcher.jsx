import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired
  };

  sortParameters = {
    name: { ascending: 'name', descending: '-name' },
    date: { ascending: 'date', descending: '-date' },
    rating: {
      ascending: '-autoscore',
      descending: 'autoscore'
    }
  };

  state = {
    isFetching: false,
    collection: [],
    activeSort: this.sortParameters.date.descending,
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    onClickSortBy: () => this.handleClickSortBy(),
    onClickLoadMore: () => this.handleClickLoadMore()
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api
        .get(
          replaceQueryParameters(url, {
            ordering: this.state.activeSort
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
        });
    });
  }

  // UNSAFE_componentWillReceiveProps() {
  //   this.fetchGames();
  // }

  handleClickLoadMore() {
    this.fetchData(this.state.nextPageUrl, true);
  }

  handleClickSortBy(type) {
    //TODO: fix this so it recieves parameters
    this.setState(
      {
        activeSort:
          this.state.activeSort === this.sortParameters[type].ascending
            ? this.sortParameters[type].descending
            : this.sortParameters[type].ascending
      },
      () => this.fetchData(this.state.apiUrl)
    );
  }

  componentDidMount() {
    this.fetchData(this.state.apiUrl);
  }

  render() {
    return !this.state.isFetching ? ( //TODO: componentDidUpdate?
      this.props.render(this.state)
    ) : (
      <div>NAFFIN</div>
    );
  }
}

export default DataFetcher;
