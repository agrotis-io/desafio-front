import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiPlus } from 'react-icons/fi'

import {
  Board,
  BackgroundWhite,
  BoardHeader,
  BoardTitle,
  SearchBox,
  SearchButton,
  SearchInput,
  List,
  ListItem,
  ItemName,
  ItemDescription,
  LoadMore,
  AddButton
} from './styles'

function Home () {
  const [Search, setSearch] = useState('')

  return (
    <Board>
      <BackgroundWhite>
        <BoardHeader>
          <BoardTitle>Situação do Documento</BoardTitle>
          <SearchBox>
            <SearchButton><FiSearch /></SearchButton>
            <SearchInput
              placeholder="Pesquisar por nome"
              type="text"
              value={Search}
              onChange={e => setSearch(e.target.value)}
            />
          </SearchBox>
        </BoardHeader>
        <List>
          <ListItem>
            <ItemName>Nome: <span>Andamento</span></ItemName>
            <ItemDescription>Descricao: <span>Quando o contrato está em andamento e pode ser alterado</span></ItemDescription>
          </ListItem>
          <ListItem>
            <ItemName>Nome: <span>Finalizado</span></ItemName>
            <ItemDescription>Descricao: <span>Quando o contrato foi atendido e pode não ser modificado</span></ItemDescription>
          </ListItem>
        </List>
        <LoadMore>
          <a href="#">Carregar Mais...</a>
          <p>(2-10)</p>
        </LoadMore>
      </BackgroundWhite>
      <Link to="/situation">
        <AddButton>
          <FiPlus />
        </AddButton>
      </Link>
    </Board>
  )
}

export default Home
