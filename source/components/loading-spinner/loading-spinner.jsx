import React from 'react';
import VisuallyHidden from '../../components/visually-hidden';
import Icon from '../../components/icon';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Icon name="spinner" size={Icon.sizes.huge} />
    <VisuallyHidden>Loading</VisuallyHidden>
  </div>
);

export default LoadingSpinner;
