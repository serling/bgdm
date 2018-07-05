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
              lead="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              modi quisquam maiores consequuntur voluptates commodi?"
              heading={this.props.heading}
              showControls={true}
              showLoadMore={true}
              gridColumns={3}
            />
          )}
        />
      </div>
    );
  }
}

export default AllGames;
