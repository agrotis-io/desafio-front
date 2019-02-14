import React from 'react';
import { ICONS } from './icons';

const Icon = ({ icon, height, width }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="#fff"
    height={height}
    width={width} 
    viewBox={`0 0 ${width} ${height}`}
  >
    { ICONS[icon] }
  </svg>
);

Icon.defaultProps = {
  height: 24,
  width: 24,
};

export default Icon;
