import { REMOVE_SITUATION, SUCCESS_GET_SITUATIONS, FAILURE_GET_SITUATIONS } from 'store/actions/situationsActions'

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: false
}

export function situationsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_SITUATION:
      return state
    case SUCCESS_GET_SITUATIONS:
      return action.payload
    case FAILURE_GET_SITUATIONS:
      return INITIAL_STATE
    default:
      return state
  }
}
