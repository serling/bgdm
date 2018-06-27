import React from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import cn from 'classnames';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';
import Button from '../../components/button';
import TextInput from '../../components/text-input';

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
      searchQuery: this.inputRef.value
    });
  }

  handleOnTextInputChange = debounce(
    () => this.setSearchString(),
    this.props.searchCooldown
  );

  render() {
    return (
      <div className="search">
        <div className="search__input">
          <TextInput
            onKeyDown={this.handleOnTextInputChange}
            onRef={ref => (this.inputRef = ref)}
            placeholder="search"
          />
        </div>
        {this.state.searchQuery.length > this.props.searchInputThreshold &&
          this.state.showResults && (
            <div
              className={cn('search__results', {
                'search__results--in-focus': false
              })}
            >
              <div className="search__toolbar">
                <Button
                  text="close"
                  iconName="close"
                  onClick={() => this.handleClickCloseButton()}
                  className="search__close"
                />
              </div>
              <DataFetcher
                searchQuery={this.state.searchQuery}
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
