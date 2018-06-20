import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/text';
import Link from '../../components/link';

const Quote = ({ text, gameTitle, gameHref, reviewerName, reviewerHref }) => (
  <div className="quote">
    <Text className="quote__text" size={Text.sizes.large}>
      {text}
    </Text>
    <div className="quote__source">
      <Link href={reviewerHref}>{reviewerName}</Link>,<Link href={gameHref}>
        {gameTitle}
      </Link>
    </div>
  </div>
);

Quote.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  gameHref: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  reviewerHref: PropTypes.string.isRequired
};

export default Quote;
