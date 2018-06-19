import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Image from '../../components/image';

const Game = ({ title, href, imgSrc, isLoading }) => (
  <div className="game">
    <Link routerHref={href}>
      <Image src={imgSrc} altText={title} className="game__image" />
      <Heading level={3} className="game__title">
        {title}
      </Heading>
      {isLoading && <p>fetching</p>}
    </Link>
  </div>
);

Game.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};
export default Game;
