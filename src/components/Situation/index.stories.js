import React from 'react'
import Situation from './index'
import theme from '../../styles/themes/light'
import GlobalStyle from '../../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Situation',
  component: Situation
}

export function Default () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
    </ThemeProvider>
  )
}
