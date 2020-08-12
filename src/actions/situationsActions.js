/**
 * Constants
 */

export const REMOVE_SITUATION = 'REMOVE_SITUATION'

export const SUCCESS_GET_SITUATIONS = 'SUCCESS_GET_SITUATIONS'
export const FAILURE_GET_SITUATIONS = 'FAILURE_GET_SITUATIONS'

// variables that Saga listens to
export const ASYNC_ADD_SITUATION = 'ASYNC_ADD_SITUATION'
export const ASYNC_GET_SITUATIONS = 'ASYNC_GET_SITUATIONS'
export const ASYNC_REMOVE_SITUATION = 'ASYNC_REMOVE_SITUATION'

/**
 * Actions creators
 */

// Add a situation to state
export function addSituation (data) {
  return {
    type: ASYNC_ADD_SITUATION,
    payload: {
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

// Remove a situation
export function removeSituation (situation) {
  return {
    type: ASYNC_REMOVE_SITUATION,
    payload: situation
  }
}
