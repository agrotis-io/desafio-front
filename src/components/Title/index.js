import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function Title ({ text }) {
  return (
    <Container>
      {text}
    </Container>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}
