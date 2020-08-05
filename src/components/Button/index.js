import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function Button ({ text, hasBackground, type, form }) {
  return (
    <Container hasBackground={hasBackground} type={type} form={form}>
      {text}
    </Container>
  )
}

Button.defaultProps = {
  form: '',
  hasBackground: true,
  type: 'submit'
}

Button.propTypes = {
  form: PropTypes.string,
  hasBackground: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
}
