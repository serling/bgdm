import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Image from '../../components/image';

const themes = {
  default: 'default',
  flat: 'flat',
  tall: 'tall'
};

const staticHref = '../../mockup/assets/static.jpg';

const Game = ({ title, href, imgSrc, theme }) => (
  <div className={cn('game', `game--${theme}`)}>
    <Link routerHref={href}>
      <Image
        src={imgSrc ? imgSrc : staticHref}
        altText={title}
        className="game__image"
      />
      <Heading level={3} className="game__title">
        {title}
      </Heading>
    </Link>
  </div>
);

Game.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.defaultProps = {
  theme: themes.default
};

Game.themes = themes;

export default Game;
