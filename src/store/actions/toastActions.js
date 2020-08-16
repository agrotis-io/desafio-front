// Constants
export const CHANGE_TOAST_STATUS = 'CHANGE_TOAST_STATUS'

// Actions creators
export function changeToastStatus (data) {
  return {
    type: CHANGE_TOAST_STATUS,
    payload: {
      data
    }
  }
}
