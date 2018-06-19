import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const paddings = {
  none: 'none',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

const widths = {
  default: 'default',
  full: 'full'
};

const colors = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

const Row = ({ padding, width, backgroundColor, children }) => (
  <div
    className={cn(
      'row',
      `row--padding-${padding}`,
      `row--color-${backgroundColor}`
    )}
  >
    <div className={cn('row__content', `row__content--width-${width}`)}>
      {children}
    </div>
  </div>
);

Row.propTypes = {
  width: PropTypes.oneOf(Object.keys(widths).map(key => widths[key])),
  padding: PropTypes.oneOf(Object.keys(paddings).map(key => paddings[key])),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  backgroundColor: PropTypes.oneOf(Object.keys(colors).map(key => colors[key]))
};

Row.defaultProps = {
  width: widths.default,
  color: colors.default,
  padding: paddings.none
};

Row.widths = widths;
Row.colors = colors;
Row.paddings = paddings;

export default Row;
