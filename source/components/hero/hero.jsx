import React from 'react';
// import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';

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
          <FilteredGamesList
            gridColumns={1}
            heading={'just the one'}
            initialNumberOfItemsToLoad={1}
            apiUrl={'http://n.zawiarr.com/bgdm/api/games/'} //TODO: ?limit=
          />
        </div>
        <div className="hero__highlights">
          <FilteredGamesList
            gridColumns={3}
            heading={'highlights'}
            initialNumberOfItemsToLoad={3}
            apiUrl={'http://n.zawiarr.com/bgdm/api/games/'}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
