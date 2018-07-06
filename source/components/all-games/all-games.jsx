import React from 'react';
import PropTypes from 'prop-types';

import FilteredGamesList from '../../components/filtered-games-list';
import DataFetcher from '../../components/data-fetcher';
import Modal from '../../components/modal';

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
        <Modal onCloseClick={() => {}}>
          <div>hello, there</div>
        </Modal>
      </div>
    );
  }
}

export default AllGames;
