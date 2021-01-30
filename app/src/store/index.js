import { createStore } from 'redux'

// Estado inicial
const INITIAL_STATE = {
  data: [
    {
      "name": "Andamento",
      "description": "Quando o contrato está em andamento e pode ser alterado"
    },
    {
      "name": "Finalizado",
      "description": "Quando o contrato foi atendido e pode não ser modificado"
    },
  ],
}

// Função para fazer alteração nas situações
function situations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SITUATION':
      return { ...state, data: [...state.data, action.newSituation] }
    default:
      return state
  }
}
// Store do redux
const store = createStore(situations)

export default store
