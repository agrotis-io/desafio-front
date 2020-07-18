import React, { useState } from 'react'
import Icon from '../Icon'
import { Container, Input } from './styles'

export default function SearchDesktop () {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container isActive={isActive}>
      <div onClick={() => setIsActive(!isActive)}>
        <Icon name='search' width='20' />
      </div>
      <Input aria-label='Campo de pesquisa' placeholder='Pesquisar por nome' isActive={isActive} />
    </Container>
  )
}
