import { CHANGE_THEME } from 'store/actions'

import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

const initialState = {
  theme: light,
  isDark: false
}

export function themeReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        theme: action.payload ? dark : light,
        isDark: action.payload
      }
    default:
      return state
  }
}
