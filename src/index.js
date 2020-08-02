import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
