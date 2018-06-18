import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading';

const Game = ({ title, isLoading }) => (
  <div className="game">
    <Heading level={3}>{title}</Heading>
    {isLoading && <p>fetching</p>}
  </div>
);

Game.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool
};
export default Game;
