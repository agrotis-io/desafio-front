import React from 'react'

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import { Main } from './styles'

function App () {
  return (
    <>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </>
  )
}

export default App
