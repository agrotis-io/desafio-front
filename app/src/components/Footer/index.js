import React from 'react'
// Icones
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
// Stilos do Styled Components
import { FooterDiv, Social } from './styles'

function Footer () {
  return (
    <FooterDiv>
      <Social>
        <a href="https://www.linkedin.com/in/victor-hugo-araujo-de-carvallho-25222a184/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />  
        </a>
        <a href="https://github.com/VictorCarvalho16" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </Social>
      Victor Carvalho © 2020
    </FooterDiv>
  )
}

export default Footer
