import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Image from '../../components/image';

const themes = {
  default: 'default'
};

const Game = ({ title, href, imgSrc, isLoading, theme }) => (
  <div className={cn('game', `game--${theme}`)}>
    <Link routerHref={href}>
      <Image src={imgSrc} altText={title} className="game__image" />
      <Heading level={3} className="game__title">
        {title}
      </Heading>
      {isLoading && <p>fetching...</p>}
    </Link>
  </div>
);

Game.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.defaultProps = {
  theme: themes.default
};

Game.themes = themes;

export default Game;
