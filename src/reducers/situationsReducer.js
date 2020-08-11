import { ADD_SITUATION, REMOVE_SITUATION, SUCCESS_GET_SITUATIONS, FAILURE_GET_SITUATIONS } from 'actions/situationsActions'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
}

export function situationsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SITUATION:
      return [
        ...state,
        action.payload
      ]
    case REMOVE_SITUATION:
      return state
    case SUCCESS_GET_SITUATIONS:
      return action.payload
    case FAILURE_GET_SITUATIONS:
      return state
    default:
      return state
  }
}
