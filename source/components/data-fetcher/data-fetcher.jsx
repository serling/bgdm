import React from 'react';
import PropTypes from 'prop-types';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired
  };

  orderBy = {
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
    activeOrder: this.orderBy.date.descending,
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    onClickOrderBy: () => this.handleClickOrderBy(),
    onClickLoadMore: () => this.handleClickLoadMore()
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api
        .get(
          replaceQueryParameters(url, {
            ordering: this.state.activeOrder
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

  handleClickOrderBy(type) {
    //TODO: fix this so it recieves parameters
    this.setState(
      {
        activeOrder:
          this.state.activeOrder === this.orderBy[type].ascending
            ? this.orderBy[type].descending
            : this.orderBy[type].ascending
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
