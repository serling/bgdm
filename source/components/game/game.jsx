import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Background from '../../components/background';
import Icon from '../../components/icon';
// import VisuallyHidden from '../../components/visually-hidden';

const themes = {
  default: 'default',
  wide: 'wide'
};

const staticHref = '../../mockup/assets/static.jpg';

const Game = ({ title, href, imgSrc, theme, systemIconName, tagline }) => (
  <div className={cn('game', `game--${theme}`)}>
    <Link className="game__image" href={href}>
      <Background src={imgSrc ? imgSrc : staticHref} />
    </Link>
    {/* <div className="game__data"> */}
    <div className="game__info">
      <Link href={href} className="game__title">
        <Heading level={3}>{title}</Heading>
      </Link>
      <p>{tagline}</p>
      <Icon
        className="game__genre"
        name={systemIconName}
        size={Icon.sizes.small}
      />
    </div>
    {/* </div> */}
  </div>
);

Game.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  systemIconName: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  tagline: PropTypes.string
};

Game.defaultProps = {
  theme: themes.default
};

Game.themes = themes;

export default Game;
