import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Background from '../../components/background';

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

const Row = ({ padding, width, backgroundColor, children, backgroundName }) => (
  <div
    className={cn('row', `row--padding-${padding}`, {
      'row--has-background-image': backgroundName,
      [`row--color-${backgroundColor}`]: backgroundColor
    })}
  >
    <Background name={backgroundName} theme={Background.themes.shadow} />

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
  backgroundColor: PropTypes.oneOf(Object.keys(colors).map(key => colors[key])),
  backgroundName: PropTypes.string
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
