import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
// import do Dispatch do redux para acionar função do store
import { useDispatch } from 'react-redux'

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
// função redux para adicionar nova situação
function addSituationAction(newSituation) {
  return { type: 'ADD_SITUATION', newSituation }
}

function Situation () {
  // history do router dom para navegação
  const history = useHistory()
  // dispatch do redux para usar dados do store
  const dispatch = useDispatch()
  // inputs do usuario
  const [inputs, setInputs] = useState({
    name: '',
    description: ''
  })
  // função para setInputs
  function handleInputs(event) {
    let helper = { ...inputs }
    helper[event.target.name] = event.target.value
    setInputs(helper)
  }
  // Adiciona dados digitados pelo usuario no Redux
  // E Volta para Home
  function saveNewSituation() {
    dispatch(addSituationAction(inputs))
    history.push('/')
  }

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
            <SaveButton onClick={saveNewSituation}>Salvar</SaveButton>
          </Actions>
        </BoardHeader>
        <Inputs>
          <NameInput>
            <label htmlFor="name">Nome*</label>
            <input 
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              onChange={handleInputs}
              required
            />
          </NameInput>
          <DescriptionInput>
            <label htmlFor="description">Descrição*</label>
            <input 
              type="text"
              name="description"
              id="description"
              value={inputs.description}
              onChange={handleInputs}
              required
            />
          </DescriptionInput>
        </Inputs>
      </BackgroundWhite>
      <Separator />
    </Board>
  )
}

export default Situation
