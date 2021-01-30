import React from 'react'
// Estilos do Styled Components
import { HeaderDiv, LogoImg } from './styles'
// Import Logo
import Logo from '../../assets/logo.png'

function Header () {
  return (
    <HeaderDiv>
      <LogoImg src={Logo} alt="logo" />
    </HeaderDiv>
  )
}

export default Header
