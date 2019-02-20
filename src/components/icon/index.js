import React from 'react';
import pt from 'prop-types';

import { ICONS } from './icons';

const Icon = ({ className, icon, height, bg, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={bg}
    height={height}
    width={width}
    viewBox={`0 0 24 24`}
  >
    { ICONS[icon] }
  </svg>
);

Icon.defaultProps = {
  height: 24,
  bg: '#000',
  width: 24,
};

Icon.propTypes = {
  className: pt.string,
  icon: pt.oneOf(Object.keys(ICONS)),
};

export default Icon;
