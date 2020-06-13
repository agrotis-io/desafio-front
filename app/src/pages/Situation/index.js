import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import {
  Board,
  BackgroundWhite,
  BoardHeader,
  BoardTitle,
  Actions,
  SaveButton,
  Separator,
  Inputs,
  NameInput,
  DescriptionInput
} from './styles'

function Situation () {
  return (
    <Board>
      <BackgroundWhite>
        <BoardHeader>
          <BoardTitle>
            <Link to="/">
              <FiChevronLeft />
              <span>Voltar</span>
            </Link>
            Situação
          </BoardTitle>
          <Actions>
            <Link to="/">Voltar</Link>
            <SaveButton>Salvar</SaveButton>
          </Actions>
        </BoardHeader>
        <Inputs>
          <NameInput>
            <label htmlFor="name">Nome*</label>
            <input type="text" name="name" id="name" />
          </NameInput>
          <DescriptionInput>
            <label htmlFor="description">Descrição*</label>
            <input type="text" name="description" id="description" />
          </DescriptionInput>
        </Inputs>
      </BackgroundWhite>
      <Separator />
    </Board>
  )
}

export default Situation
