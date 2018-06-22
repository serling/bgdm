import React from 'react';
import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';
import Button from '../../components/button';

class Search extends React.Component {
  static propTypes = {
    searchCooldown: PropTypes.number,
    searchInputThreshold: PropTypes.number
  };

  static defaultProps = {
    searchCooldown: 300,
    searchInputThreshold: 2
  };

  state = {
    searchString: '',
    searchQuery: '',
    showResults: true
  };

  inputRef = {};

  handleClickCloseButton() {
    this.setState({
      showResults: false
    });
  }

  setSearchString() {
    this.setState({
      showResults: true,
      searchQuery: this.inputRef.value,
      searchString:
        'http://n.zawiarr.com/bgdm/api/games/?search=' + this.inputRef.value
    });
  }

  handleOnTextInputChange = debounce(
    () => this.setSearchString(),
    this.props.searchCooldown
  );

  render() {
    return (
      <div className="search">
        <div className="search__bar">
          <input
            onChange={this.handleOnTextInputChange}
            type="text"
            className="search__input"
            ref={ref => (this.inputRef = ref)}
            placeholder="search..."
          />
        </div>
        {this.state.searchQuery.length > this.props.searchInputThreshold &&
          this.state.showResults && (
            <div className="search__results">
              <Button
                text="close"
                icon="X"
                onClick={() => this.handleClickCloseButton()}
                className="search__close"
              />
              <DataFetcher
                apiUrl={this.state.searchString}
                numberOfItemsToFetch={10}
                render={data => (
                  <FilteredGamesList
                    heading={'search results'}
                    showNumerOfResults={true}
                    gridColumns={4}
                    showControls={true}
                    buttonPlacement={'center'}
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
