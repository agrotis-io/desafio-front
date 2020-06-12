import styled from 'styled-components';

const Board = styled.div`
  width: 96%;
  margin: auto;
  padding-top: 30px;
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

export { Board, BoardHeader, BoardTitle };