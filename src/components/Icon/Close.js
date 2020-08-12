import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  cursor: pointer;
`

export default function Close ({ width, color }) {
  return (
    <StyledSVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill={color} width={width} height={width}>
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z' />
    </StyledSVG>
  )
}

Close.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}
