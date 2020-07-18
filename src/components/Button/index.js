import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function Button ({ text, hasBackground }) {
  return (
    <Container hasBackground={hasBackground}>
      {text}
    </Container>
  )
}

Button.defaultProps = {
  hasBackground: true
}

Button.propTypes = {
  hasBackground: PropTypes.bool,
  text: PropTypes.string.isRequired
}
