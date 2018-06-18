import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Footer = ({ className }) => (
  <div className={cn('footer', className)}>footer</div>
);

Footer.propTypes = {
  className: PropTypes.string
};
export default Footer;
