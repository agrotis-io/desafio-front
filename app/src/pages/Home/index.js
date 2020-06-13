import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiPlus } from 'react-icons/fi'

import { useSelector } from 'react-redux'

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

//let newValue = {}

function Home () {
  const [search, setSearch] = useState('')
  const data = useSelector(state => state.data)
  
  const [render, setRender] = useState([])
  const [helper, setHelper] = useState(2)

  useEffect(() => {
    let datarender = []
    if (search.length > 2) {
      datarender = data.filter(item => (item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1))
      document.getElementById('load-more').style.display = 'none';
    } else {
      for (let index = 0; index < helper; index++) {
        datarender.push(data[index])
        if (helper !== data.length) {
          document.getElementById('load-more').style.display = 'block';
        }
      }
    }
    setRender(datarender)
  }, [helper, search, data])

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
        {data.length > 2 &&
          <LoadMore id="load-more">
           <span onClick={showAll}>Carregar Mais...</span>
           <p>(2-{data.length})</p>
         </LoadMore>
        }
       
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
