import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Form from './pages/form'

const baseUrl = '/'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={baseUrl} component={Home} />
      <Route path={baseUrl+"form"} component={Form} />
    </Switch>
  </BrowserRouter>
)

export default Routes
