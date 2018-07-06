import React from 'react';
import PropTypes from 'prop-types';

class GameDetails extends React.Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    tagline: PropTypes.object.isRequired
  };

  state = {};

  render() {
    return (
      <div className="game-details">
        <div>{this.props.name}</div>
        <div>{this.props.tagline}</div>
      </div>
    );
  }
}

export default GameDetails;
