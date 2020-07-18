import React from 'react'
import Search from './index'
import theme from '../../styles/themes/light' // DEIXAR ISSO GERENCIAVEL VIA REDUX
import GlobalStyle from '../../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Search',
  component: Search
}

export function Default () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Search />
    </ThemeProvider>
  )
}
