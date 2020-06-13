import React from 'react'
import { HeaderDiv, LogoImg } from './styles'
import Logo from '../../assets/logo.png'

function Header () {
  return (
    <HeaderDiv>
      <LogoImg src={Logo} alt="logo" />
    </HeaderDiv>
  )
}

export default Header
