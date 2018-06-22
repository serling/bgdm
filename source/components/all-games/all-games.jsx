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
          apiUrl="http://n.zawiarr.com/bgdm/api/games/"
          numberOfItemsToFetch={10}
          render={state => (
            <FilteredGamesList
              heading={this.props.heading}
              showControls={true}
              showLoadMore={true}
              buttonPlacement={'center'}
              gridColumns={4}
              {...state}
            />
          )}
        />
      </div>
    );
  }
}

export default AllGames;
