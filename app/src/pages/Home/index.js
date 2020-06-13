import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiPlus } from 'react-icons/fi'
// Selector do redux para receber as situações
import { useSelector } from 'react-redux'
// Importação dos estilos do Styled Components
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
  AddButton,
  Separator
} from './styles'

function Home () {
  // Variavel para pesquisa de situações por nome
  const [search, setSearch] = useState('')
  // Colocando dados do redux em variavel
  const data = useSelector(state => state.data)
  // constante que renderiza os dados na tela tela
  const [render, setRender] = useState([])
  // constante para selecionar quantos elementos setão renderizados
  const [helper, setHelper] = useState(2)
  // Effect para pesquisa e mostrar mais
  useEffect(() => {
    let datarender = []
    if (search.length > 2) {
      datarender = data.filter(item => (item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1))
      document.getElementById('load-more').style.display = 'none';
    } else {
      for (let index = 0; index < helper; index++) {
        datarender.push(data[index])
        document.getElementById('load-more').style.display = 'none';
        if (helper !== data.length) {
          document.getElementById('load-more').style.display = 'block';
        }
      }
    }
    setRender(datarender)
  }, [helper, search, data])
  //função para mostrar todas as situações
  function showAll() {
    document.getElementById('load-more').style.display = 'none';
    setHelper(data.length)
  }

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
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </SearchBox>
        </BoardHeader>
        <List>
          {render.map(item => (
            <ListItem key={item.name}>
              <ItemName>Nome: <span>{item.name}</span></ItemName>
              <ItemDescription>Descricao: <span>{item.description}</span></ItemDescription>
            </ListItem>
          ))}
        </List>
        <LoadMore id="load-more">
          <span onClick={showAll}>Carregar Mais...</span>
          <p>(2-{data.length})</p>
        </LoadMore>
        <Link to="/situation">
          <AddButton>
            <FiPlus />
            <span>Novo Registro</span>
          </AddButton>
        </Link>
      </BackgroundWhite>
      <Separator />
    </Board>
  )
}

export default Home
