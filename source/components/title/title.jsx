import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <div className="title">
    <h1>{children}</h1>
  </div>
);

Title.propTypes = {
  children: PropTypes.any.isRequired
};
export default Title;
