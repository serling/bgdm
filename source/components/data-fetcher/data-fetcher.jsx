import React from 'react';
import PropTypes from 'prop-types';
import api from '../../js/api-helper';

class DataFetcher extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired
  };

  sortParameters = {
    name: { ascending: '?&ordering=name', descending: '?&ordering=-name' },
    date: { ascending: '?&ordering=date', descending: '?&ordering=-date' },
    rating: {
      ascending: '?&ordering=-autoscore',
      descending: '?&ordering=autoscore'
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

  handleClickSortBy(type) {
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
