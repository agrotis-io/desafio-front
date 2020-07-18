import React from 'react'
import PropTypes from 'prop-types'

export default function Arrow ({ width, color, direction }) {
  let d
  switch (direction) {
    case 'right':
      d = 'M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z'
      break
    case 'left':
      d = 'M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z'
      break
    case 'up':
      d = 'M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z'
      break
    case 'down':
      d = 'M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z'
      break
    default:
      d = 'M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z'
      break
  }

  return (
    <svg width={width} height={width} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d={d}
        fill={color}
      />
    </svg>
  )
}

Arrow.propTypes = {
  color: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}
