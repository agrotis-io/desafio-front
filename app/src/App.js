import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import { Main } from './styles'

function App () {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </Provider>
  )
}

export default App
