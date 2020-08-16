import { CHANGE_TOAST_STATUS } from 'store/actions/toastActions'

export function toastReducer (state = false, action) {
  switch (action.type) {
    case CHANGE_TOAST_STATUS :
      return action.payload.data
    default:
      return state
  }
}
