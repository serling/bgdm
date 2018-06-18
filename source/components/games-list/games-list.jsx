import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/grid';
import Game from '../../components/game';

class GamesList extends React.Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    gridColumns: PropTypes.number
  };

  state = {
    games: this.props.games
  };

  render() {
    return (
      <div className="games-list">
        <Grid columns={this.props.gridColumns}>
          {this.state.games.map((game, index) => (
            <Game key={game.id || index} {...game} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default GamesList;
