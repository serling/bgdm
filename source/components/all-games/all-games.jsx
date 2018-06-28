import React from 'react';
import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';

class AllGames extends React.Component {
  static propTypes = { heading: PropTypes.string };

  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="all-games">
        <DataFetcher
          numberOfItemsToFetch={10}
          render={state => (
            <FilteredGamesList
              {...state}
              heading={this.props.heading}
              showControls={true}
              showLoadMore={true}
              buttonPlacement={'center'}
              gridColumns={4}
            />
          )}
        />
      </div>
    );
  }
}

export default AllGames;
