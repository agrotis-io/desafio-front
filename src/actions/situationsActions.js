// Constants
export const ADD_SITUATION = 'ADD_SITUATION'
export const REMOVE_SITUATION = 'REMOVE_SITUATION'

// Actions creators
export function addSituation (data) {
  return {
    type: ADD_SITUATION,
    payload: {
      id: data.id,
      name: data.name,
      description: data.description
    }
  }
}
