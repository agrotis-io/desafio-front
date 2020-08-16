import React from 'react'
import { Container, Label, Text, Section } from './styles'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeSituation } from 'store/actions'
import variables from 'styles/variables'
import Icon from 'components/Icon'
import Absolute from 'components/Absolute'

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
      <Absolute top='0' right='0'>
        <div onClick={() => dispatch(removeSituation(situation))}>
          <Icon name='close' width='25' color={variables.colors.secondary.w900} />
        </div>
      </Absolute>
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
