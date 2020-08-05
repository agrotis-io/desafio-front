import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { situationsReducer } from './situationsReducer'
import { toastReducer } from './toastReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  situations: situationsReducer,
  toast: toastReducer
})

export default rootReducer
