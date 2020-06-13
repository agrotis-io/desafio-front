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
  position: relative;
`

const BoardHeader = styled.div`
  background: #145E43;
  color: #FFF;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    font-size: 0.5em;
    justify-content: space-between;
  }
`

const BoardTitle = styled.h2`
  margin-left: 16px;
  font-weight: normal;
  @media only screen and (max-width: 600px) {
    margin-right: 8px;
  }  
`

const SearchBox = styled.form`
  display: flex;
  background: #FFF;
  color: #000;
  height: 36px;
  align-items: center;
  margin-right: 8px;
  @media only screen and (max-width: 600px) {
    height: 36px;
    width: 180px;
  }
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
  &:hover {
    filter: brightness(120%);
  }
  @media only screen and (max-width: 600px) {
    margin-left: 4px;
    margin-right: 4px;
  }
`

const SearchInput = styled.input`
  border: none;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
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
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    text-align: center;
  }
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
  @media only screen and (max-width: 600px) {
    margin-top: 8px;
    flex-basis: 100%;
  }
`

const LoadMore = styled.div`
  display: block;
  text-align: center;
  span {
    cursor: pointer;
    color: #145E43;
    text-decoration: underline;
  }
  p {
    color: #cccccc;
  }
`

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #B45F06;
  bottom: 45px;
  cursor: pointer;

  position: absolute;
  z-index: 1;
  top: 95%;
  left: 96%;
  margin-left: -60px;

  svg {
    width: 50px;
    height: 50px;
    color: #FFF;
  }

  span {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    opacity: 0.5;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  &:hover span {
    visibility: visible;
  }
`
const Separator = styled.div`
  width: 50px;
  height: 50px;
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
  AddButton,
  Separator
}
