// Constants
export const ASYNC_ADD_SITUATION = 'ASYNC_ADD_SITUATION'
export const ASYNC_GET_SITUATIONS = 'ASYNC_GET_SITUATIONS'

export const ADD_SITUATION = 'ADD_SITUATION'
export const REMOVE_SITUATION = 'REMOVE_SITUATION'

export const SUCCESS_GET_SITUATIONS = 'SUCCESS_GET_SITUATIONS'
export const FAILURE_GET_SITUATIONS = 'FAILURE_GET_SITUATIONS'

// Actions creators

// Add a situation to the state
export function addSituation (data) {
  return {
    type: ASYNC_ADD_SITUATION,
    payload: {
      id: data.id,
      name: data.name,
      description: data.description
    }
  }
}

// Get situations from api
export function getSituations () {
  return {
    type: ASYNC_GET_SITUATIONS
  }
}
