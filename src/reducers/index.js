import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { situationsReducer } from './situationsReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  situations: situationsReducer
})

export default rootReducer
