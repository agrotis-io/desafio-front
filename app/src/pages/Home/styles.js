import styled from 'styled-components'

const Board = styled.div`
  width: 96%;
  margin: auto;
  padding-top: 30px;  
`
const BackgroundWhite = styled.div`
  background-color: #FFF;
  min-height: calc(100vh - 244px);
  margin-bottom: 20px;
`

const BoardHeader = styled.div`
  background: #145E43;
  color: #FFF;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
`

const BoardTitle = styled.h2`
  margin-left: 16px;
  font-weight: normal;
`

const SearchBox = styled.form`
  display: flex;
  background: #FFF;
  color: #000;
  height: 36px;
  align-items: center;
  margin-right: 8px;
`
const SearchButton = styled.button`
  background-color: #FFF;
  border: none;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
  &:hover{
    filter: brightness(120%);
  }
`

const SearchInput = styled.input`
  border: none;
`

const List = styled.ul`
  list-style: none;
  padding-top: 10px;
  padding-bottom: 20px;
`

const ListItem = styled.li`
  display: flex;
  border: 1px solid #cccccc;
  padding: 20px 10px;
  width: 90%;
  margin: 10px auto;
  border-radius: 5px;
`
const ItemName = styled.p`
  flex-grow: 2;
  span {
    font-weight: bold;
  }
`

const ItemDescription = styled.p`
  flex-grow: 2;
  text-align: center;
  span {
    font-weight: bold;
  }
`

const LoadMore = styled.div`
  display: block;
  text-align: center;
  a {
    cursor: pointer;
    color: #145E43;
    text-decoration: underline;
  }
  p{
    color: #cccccc;
  }
`

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #B45F06;
  position: relative;
  bottom: 45px;
  left: 1000px;
  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
    color: #FFF;
  }
`

export {
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
}
