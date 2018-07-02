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
  flat: 'flat',
  tall: 'tall'
};

const staticHref = '../../mockup/assets/static.jpg';

const Game = ({ title, href, imgSrc, theme, systemIconName, tagline }) => (
  <div className={cn('game', `game--${theme}`)}>
    <div className="game__image">
      <Background src={imgSrc ? imgSrc : staticHref} />
    </div>
    <div className="game__data">
      <div className="game__title">
        <Heading level={3}>{title}</Heading>
        <p>{tagline}</p>
        <Icon
          className="game__genre"
          name={systemIconName}
          size={Icon.sizes.small}
        />
      </div>
    </div>
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
