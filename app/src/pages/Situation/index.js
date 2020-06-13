import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

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

function addSituationAction(newSituation) {
  return { type: 'ADD_SITUATION', newSituation }
}

function Situation () {
  const history = useHistory()
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    name: '',
    description: ''
  })

  function handleInputs(event) {
    let helper = { ...inputs }
    helper[event.target.name] = event.target.value
    setInputs(helper)
  }

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
