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
  position: relative;
  display: inline-block;  
  svg {
    color: #FFF;
    padding-right: 5px;
    &:hover{
      color: #cccccc;
    }
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
    top: 100%;
    left: 50%;
    margin-left: -60px;
  }
  &:hover span {
    visibility: visible;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`

const Actions = styled.div`
  display: flex;
  margin: 10px;
  * {
    width: 80px;
    height: 30px;
    margin-right: 10px;
    text-align: center;
    padding-top: 5px;
  }
  a {
    color: #FFF;
    text-decoration: none;
    &:hover{
      color: #cccccc;
    }
  }
`

const SaveButton = styled.div`
  background-color: #1A6B4D;
  cursor: pointer;
  &:hover{
    filter: brightness(120%);
  }
`

const Inputs = styled.div`
  display: flex;
  margin: 20px 10px 20px 5px;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`

const NameInput = styled.div`
  flex-grow: 1;
  margin: 5px;
  label {
    display: block;
    color: #000000aa;
  }
  input{
    border: none;
    border-bottom: 1px solid #ccc;
    width: 90%;
    font-size: 1.2em;
    padding: 5px;
  }
`

const DescriptionInput = styled.div`
  flex-grow: 2;
  margin: 5px;
  label {
    display: block;
    color: #000000aa;
  }
  input{
    border: none;
    border-bottom: 1px solid #ccc;
    width: 90%;
    font-size: 1.2em;
    padding: 5px;
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
  Actions,
  SaveButton,
  Separator,
  Inputs,
  NameInput,
  DescriptionInput
}
