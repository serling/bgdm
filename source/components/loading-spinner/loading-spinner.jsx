import React from 'react';
import PropTypes from 'prop-types';
import VisuallyHidden from '../../components/visually-hidden';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <VisuallyHidden>LOADING...</VisuallyHidden>
  </div>
);

LoadingSpinner.propTypes = {
  /* --------------------- 📝 --------------------- */
};
export default LoadingSpinner;
