import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/GlobalStyle'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  const { theme } = useSelector(state => state.themeReducer)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}
