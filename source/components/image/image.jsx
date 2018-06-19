import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Image = ({ src, altText, className }) => (
  <img className={cn('image', className)} src={src} alt={altText} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  altText: PropTypes.string.isRequired
};
export default Image;
