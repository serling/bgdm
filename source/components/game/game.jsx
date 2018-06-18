import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ title }) => <div className="game">{title}</div>;

Game.propTypes = {
  title: PropTypes.string
};
export default Game;
