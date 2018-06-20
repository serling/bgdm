import React from 'react';
import PropTypes from 'prop-types';
import { Chart as GoogleChart } from 'react-google-charts';

const Chart = ({ data }) => (
  <div className="chart">
    {data && (
      <div className="chart__google-chart">
        <GoogleChart {...data} />
      </div>
    )}
  </div>
);

Chart.propTypes = {
  data: PropTypes.object.isRequired
};

export default Chart;
