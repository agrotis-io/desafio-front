import React from 'react'
import {
  Container,
  Input,
  Label,
  Counter
} from './styles'

export default function RegistreSituation () {
  return (
    <Container>
      <Input type='text' required />
      <Label>Name</Label>
      <Counter>0/20</Counter>
    </Container>
  )
}
