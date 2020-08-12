import React from 'react'
import { Container, Label, Text, Section } from './styles'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeSituation } from 'actions'

export default function Situation ({ name, description, situation }) {
  const dispatch = useDispatch()

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
      <button onClick={() => dispatch(removeSituation(situation))}>delete</button>
    </Container>
  )
}

Situation.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  situation: PropTypes.objectOf(
    PropTypes.string
  ).isRequired
}
