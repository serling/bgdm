import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/text';
import Link from '../../components/link';
import Icon from '../../components/icon';

const Quote = ({ text, gameTitle, gameHref, userName, userHref }) => (
  <div className="quote">
    <Text
      className="quote__text"
      size={Text.sizes.large}
      theme={Text.themes.background}
    >
      <Icon
        className="quote__icon-left"
        name="quote-start"
        size={Icon.sizes.tiny}
      />
      {text}
      <Icon
        className="quote__icon-right"
        name="quote-end"
        size={Icon.sizes.tiny}
      />
    </Text>

    <Text
      className="quote__source"
      size={Text.sizes.large}
      theme={Text.themes.background}
    >
      <Link href={userHref} className="quote__user">
        {userName}
      </Link>
      <Link href={gameHref} className="quote__game">
        {gameTitle}
      </Link>
    </Text>
  </div>
);

Quote.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  gameHref: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userHref: PropTypes.string.isRequired
};

export default Quote;
