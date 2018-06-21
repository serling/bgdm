import React from 'react';
import PropTypes from 'prop-types';
import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired
  };

  state = {
    isFetching: false,
    collection: [],
    activeSort: '',
    apiUrl: this.props.apiUrl,
    nextPageUrl: '',
    previousPageUrl: '',
    onClickSortBy: () => this.handleClickSortBy(),
    onClickLoadMore: () => this.handleClickLoadMore()
  };

  fetchData(url, shouldAppend = false) {
    this.setState({ isFetching: true }, () => {
      api.get(url + this.state.activeSort).then(payload => {
        this.setState(previousState => ({
          nextPageUrl: payload.next,
          previousPageUrl: payload.previous,
          isFetching: false,
          collection: shouldAppend
            ? [...previousState.collection, ...payload.results]
            : payload.results
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

  handleClickSortBy(ascending, descending) {
    // let sort = {
    //   ascending: '?&ordering=name',
    //   descending: '?&ordering=-name'
    // };

    // let sort = {
    //   ascending: '?&ordering=-autoscore',
    //   descending: '?&ordering=autoscore'
    // };

    // let sort = {
    //   ascending: '?&ordering=date',
    //   descending: '?&ordering=-date'
    // };

    this.setState(
      {
        activeSort: this.state.activeSort === ascending ? descending : ascending
      },
      () => this.fetchData(this.state.apiUrl)
    );
  }

  componentDidMount() {
    this.fetchData(this.state.apiUrl);
  }

  render() {
    return !this.state.isFetching ? (
      this.props.render(this.state)
    ) : (
      <div>NAFFIN</div>
    );
  }
}

export default DataFetcher;
