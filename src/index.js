import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { themeReducer } from './pages/Layout/reducer'

const rootReducer = combineReducers({
  themeReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
