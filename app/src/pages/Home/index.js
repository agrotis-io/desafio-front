import React from 'react';

import { Board, BoardHeader, BoardTitle } from './styles';

function Home() {
  return(
    <Board>
      <BoardHeader>
        <BoardTitle>Situação do Documento</BoardTitle>
        <form>
          <input type="text" />
        </form>
      </BoardHeader>
      <ul>
        <li>
          <p>Nome: <strong>Andamento</strong></p>
          <p>Descricao: <strong>Quando o contrato está em andamento e pode ser alterado</strong></p>
        </li>
        <li>
          <p>Nome: <strong>Finalizado</strong></p>
          <p>Descricao: <strong>Quando o contrato foi atendido e pode não ser modificado</strong></p>
        </li>
      </ul>
      <div>
        <a>Carregar Mais...</a>
        <p>(2-10)</p>
      </div>
      <div>
        <a>Novo registro</a>
      </div>
    </Board>
  );
}

export default Home;
