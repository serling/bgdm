import React from 'react';
// import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';

class Search extends React.Component {
  // static propTypes = {};

  state = {
    searchString: ''
  };

  handleOnTextInputChange() {
    this.setState({
      searchString:
        this.input.value.length > 2
          ? 'http://n.zawiarr.com/bgdm/api/games/?search=' + this.input.value
          : ''
    });
  }

  render() {
    return (
      <div className="search">
        <div className="search__bar">
          <input
            onChange={() => this.handleOnTextInputChange()}
            type="text"
            className="search__input"
            ref={ref => (this.input = ref)}
            placeholder="search..."
          />
        </div>
        {this.state.searchString.length > 2 && (
          <div className="search__results">
            <DataFetcher
              apiUrl={this.state.searchString}
              numberOfItemsToFetch={10}
              render={data => (
                <FilteredGamesList
                  heading={'search results'}
                  gridColumns={4}
                  {...data}
                />
              )}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
