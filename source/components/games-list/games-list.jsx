import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/grid';
import Game from '../../components/game';

const GamesList = ({ games, gridColumns, gameTheme }) => (
  <div className="games-list">
    <Grid columns={gridColumns}>
      {games.map((game, index) => (
        <Game key={index} {...game} theme={gameTheme} />
      ))}
    </Grid>
  </div>
);

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  gridColumns: PropTypes.number,
  gameTheme: PropTypes.string
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
