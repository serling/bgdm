import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/grid';
import Game from '../../components/game';

class GamesList extends React.Component {
  static propTypes = {
    games: PropTypes.array.isRequired
  };

  state = {
    games: this.props.games
  };

  render() {
    return (
      <div className="games-list">
        <Grid title="category #1" columns={3}>
          {this.state.games.map((game, index) => (
            <Game key={game.id || index} title={game.title} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default GamesList;
