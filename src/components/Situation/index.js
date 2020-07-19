import React from 'react'
import { Container, Label, Text, Section } from './styles'
import PropTypes from 'prop-types'

export default function Situation ({ name, description }) {
  return (
    <Container>
      <Section>
        <Label>Nome:</Label>
        <Text>{name}</Text>
      </Section>
      <Section>
        <Label>Descrição:</Label>
        <Text>{description}</Text>
      </Section>
    </Container>
  )
}

Situation.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
