import React from 'react';
// import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';

class Search extends React.Component {
  // static propTypes = {};

  state = {
    searchQuery: ''
  };

  handleOnTextInputChange() {
    this.setState({
      searchQuery:
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
            disabled={true}
            placeholder="search..."
          />
        </div>
        {this.state.searchQuery.length > 2 && (
          <div className="search__results">
            <FilteredGamesList
              gridColumns={4}
              heading={'search results'}
              initialNumberOfItemsToLoad={10}
              apiUrl={this.state.searchQuery}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
