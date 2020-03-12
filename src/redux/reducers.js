/** Actions */
import { INSERT, REMOVE, SHOW_ALERT, HIDDE_ALERT } from './actions'

import { get, post } from '../utils/api'

const initialState = {
  docs: get(),
  alert_visibility: false
}

export function reducer( state=initialState, action ) {
  switch(action.type) {
    case INSERT:
      post(action.item)
      return Object.assign(state, { docs: get() })
    case REMOVE:
      return {
        docs: [...state.docs]
      }
    case SHOW_ALERT:
      return  {
        docs: state.docs,
        alert_visibility: true
      }
    case HIDDE_ALERT:
      return {
        docs: state.docs,
        alert_visibility: false
      }
    default:
      return state
  }
}