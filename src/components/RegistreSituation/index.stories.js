import React from 'react'
import RegistreSituation from './index'
import theme from '../../styles/themes/light'
import GlobalStyle from '../../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'RegistreSituation',
  component: RegistreSituation
}

export function Default () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RegistreSituation />
    </ThemeProvider>
  )
}
