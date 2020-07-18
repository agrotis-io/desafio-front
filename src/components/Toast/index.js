import React from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import { Container, Text } from './styles'

export default function Toast ({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
      <Icon name='close' width='20' />
    </Container>
  )
}

Toast.propTypes = {
  text: PropTypes.string.isRequired
}
