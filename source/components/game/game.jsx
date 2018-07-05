import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Image from '../../components/image';
import Icon from '../../components/icon';
import PlaceholderImageSrc from '../../mockup/assets/images/static.jpg';
// import VisuallyHidden from '../../components/visually-hidden';

const themes = {
  default: 'default',
  wide: 'wide'
};

const Game = ({
  score,
  title,
  href,
  indexImgSrc,
  titleImgSrc,
  theme,
  systemIconName,
  tagline
}) => {
  const imageSrc = indexImgSrc || titleImgSrc || PlaceholderImageSrc;
  return (
    <div className={cn('game', `game--${theme}`, `game--score-${score}`)}>
      <Link className="game__image" href={href}>
        <Image src={imageSrc} />
      </Link>
      <div className="game__info">
        <Link href={href} className="game__title">
          <Heading level={3}>{title}</Heading>
        </Link>
        <p className="game__tagline">{tagline}</p>
        <Icon
          className="game__genre"
          name={systemIconName}
          size={Icon.sizes.small}
        />
      </div>
    </div>
  );
};

Game.propTypes = {
  title: PropTypes.string,
  score: PropTypes.string,
  href: PropTypes.string.isRequired,
  indexImgSrc: PropTypes.string.isRequired,
  titleImgSrc: PropTypes.string.isRequired,
  systemIconName: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  tagline: PropTypes.string
};

Game.defaultProps = {
  theme: themes.default
};

Game.themes = themes;

export default Game;
