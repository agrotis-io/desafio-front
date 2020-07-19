import React from 'react'
import PropTypes from 'prop-types'
import { StyledSVG } from './StyledSVG'

export default function Dark ({ width, color }) {
  return (
    <StyledSVG
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={width}
    >
      <title />
      <path
        d='M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z'
      />
    </StyledSVG>
  )
}

Dark.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}
