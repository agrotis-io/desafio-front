import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types'

export default function Absolute ({ children, top, bottom, left, right }) {
  return (
    <Container
      bottom={bottom}
      left={left}
      right={right}
      top={top}
    >
      {children}
    </Container>
  )
}

Absolute.defaultProps = {
  bottom: 'initial',
  left: 'initial',
  right: 'initial',
  top: 'initial'
}

Absolute.propTypes = {
  bottom: PropTypes.string,
  children: PropTypes.element.isRequired,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string
}
