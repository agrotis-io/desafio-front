import { ADD_SITUATION, REMOVE_SITUATION } from 'actions/situationsActions'

export function situationsReducer (state = [], action) {
  switch (action.type) {
    case ADD_SITUATION:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_SITUATION:
      return state
    default:
      return state
  }
}
