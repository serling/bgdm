import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Image from '../../components/image';
import Backgrounds from '../../mockup/assets/backgrounds/backgrounds';

const Background = ({ className, name }) => (
  <div className={cn('background', className)}>
    <Image src={Backgrounds[name]} />
  </div>
);

Background.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.oneOf(Object.keys(Backgrounds))
};

export default Background;
