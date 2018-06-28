import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import VisuallyHidden from '../../components/visually-hidden';
import Icon from '../../components/icon';

const LoadingSpinner = ({ className }) => (
  <div className={cn('loading-spinner', className)}>
    <Icon name="spinner" size={Icon.sizes.huge} />
    <VisuallyHidden>Loading</VisuallyHidden>
  </div>
);

LoadingSpinner.propTypes = {
  className: PropTypes.string
};

export default LoadingSpinner;
