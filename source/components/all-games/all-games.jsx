import React from 'react';
// import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';

class AllGames extends React.Component {
  // static propTypes = {};

  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="all-games">
        <FilteredGamesList
          heading={'lots and lots'}
          showControls={true}
          buttonPlacement={'center'}
          showLoadMoreButton={true}
          gridColumns={4}
          initialNumberOfItemsToLoad={16}
          apiUrl={'http://n.zawiarr.com/bgdm/api/games/'}
        />
      </div>
    );
  }
}

export default AllGames;
