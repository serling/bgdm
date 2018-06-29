import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../../components/heading';

const Footer = ({ className }) => (
  <div className={cn('footer', className)}>
    <div className="footer__logo">
      <Heading level={2}>ABCD</Heading>
    </div>
    <div className="footer__info">extra information</div>
  </div>
);

Footer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Footer;
