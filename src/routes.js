import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Registre from './pages/Registre'
import Layout from './pages/Layout'

export default function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/registre' element={<Registre />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}
