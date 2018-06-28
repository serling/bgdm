import React from 'react';
// import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';

class Hero extends React.Component {
  // static propTypes = {};

  state = {};

  componentDidMount() {
    //TODO: fetch in filtered-games-list, remove games from props here
  }

  render() {
    return (
      <div className="hero">
        <div className="hero__main">
          <DataFetcher
            numberOfItemsToFetch={1}
            activeOrder="autoscore"
            render={state => (
              <FilteredGamesList
                {...state}
                heading={'just the one'}
                gridColumns={1}
                showLoadMore={false}
                collection={state.collection.slice(4, 5)} //TODO: limit!!
              />
            )}
          />
        </div>
        <div className="hero__highlights">
          <DataFetcher
            numberOfItemsToFetch={3}
            activeOrder="-autoscore"
            render={state => (
              <FilteredGamesList
                {...state}
                heading={'highlights'}
                gridColumns={3}
                showLoadMore={false}
                collection={state.collection.slice(6, 9)} //TODO: limit!!
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
