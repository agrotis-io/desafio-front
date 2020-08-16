import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import {
  Container,
  Input,
  Label,
  Counter
} from './styles'

export default function InputValue ({
  length,
  name,
  placeholder
}) {
  const { register } = useFormContext()

  return (
    <Container>
      <Input name={name} type='text' ref={register} required />
      <Label>{placeholder}</Label>
      <Counter>
        {length}
      </Counter>
    </Container>
  )
}

InputValue.propTypes = {
  length: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

InputValue.defaultProps = {
  length: null
}
