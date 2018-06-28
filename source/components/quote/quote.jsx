import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/text';
import Link from '../../components/link';
import Icon from '../../components/icon';

const Quote = ({ text, gameTitle, gameHref, reviewerName, reviewerHref }) => (
  <div className="quote">
    <Icon
      className="quote__icon-left"
      name="quote-start"
      size={Icon.sizes.medium}
    />
    <Text className="quote__text" size={Text.sizes.large}>
      {text}
    </Text>
    <Icon
      className="quote__icon-right"
      name="quote-end"
      size={Icon.sizes.medium}
    />
    <div className="quote__source">
      <Link href={reviewerHref}>{reviewerName}</Link>{' '}
      <Link href={gameHref}>{gameTitle}</Link>
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
