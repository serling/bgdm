import React from 'react';
import PropTypes from 'prop-types';

const VisuallyHidden = ({ children }) => (
  <span className="visually-hidden">{children}</span>
);

VisuallyHidden.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
export default VisuallyHidden;
