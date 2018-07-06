import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Link from '../../components/link';
import Heading from '../../components/heading';
import Image from '../../components/image';
import Icon from '../../components/icon';
import PlaceholderImageSrc from '../../mockup/assets/images/static.jpg';

const themes = {
  default: 'default',
  wide: 'wide'
};

const Game = ({
  autoscore,
  name,
  href,
  indexImgSrc,
  titleImgSrc,
  theme,
  systemIconName,
  tagline
}) => {
  const imageSrc = indexImgSrc || titleImgSrc || PlaceholderImageSrc;
  return (
    <div
      className={cn(
        'game',
        `game--${theme}`,
        ([`game--autoscore-${autoscore}`]: autoscore)
      )}
    >
      <Link className="game__image" routerHref={href}>
        <Image src={imageSrc} />
      </Link>
      <div className="game__info">
        <Link routerHref={href} className="game__name">
          <Heading level={3}>{name}</Heading>
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
  name: PropTypes.string,
  autoscore: PropTypes.string,
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
