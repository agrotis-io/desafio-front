import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

// Paginas de Navegação
import Home from './pages/Home'
import Situation from './pages/Situation'
import PageNotFound from './pages/PageNotFound'

// Estrutura defauly do Browser Router
function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Situation} path="/situation" exact />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
