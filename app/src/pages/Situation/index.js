import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import {
  Board,
  BackgroundWhite,
  BoardHeader,
  BoardTitle,
  Actions,
  SaveButton,
  Separator
} from './styles'

function Situation () {
  const [Search, setSearch] = useState('')

  return (
    <Board>
      <BackgroundWhite>
        <BoardHeader>
          <BoardTitle>
            <Link to="/">
              <FiChevronLeft />
            </Link>
            Situação
          </BoardTitle>
          <Actions>
            <Link to="/">Voltar</Link>
            <SaveButton>Salvar</SaveButton>
          </Actions>
        </BoardHeader>
        <div>
          <div>
            <label htmlFor="name">Nome*</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="description">Descrição*</label>
            <input type="text" name="description" />
          </div>
        </div>
      </BackgroundWhite>
      <Separator />
    </Board>
  )
}

export default Situation
