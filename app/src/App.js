import React from 'react'
// Importação de lib e configuração do Redux
import { Provider } from 'react-redux'
import store from './store'

// Importação da estrutura de rotas, header e footer
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

//sytle para definir a cor de fundo padrão
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
