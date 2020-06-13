import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FooterDiv, Social } from './styles'

function Footer () {
  return (
    <FooterDiv>
      <Social>
        <a href="https://www.linkedin.com/in/victor-hugo-araujo-de-carvallho-25222a184/" target="_blank">
          <FaLinkedinIn />  
        </a>
        <a href="https://github.com/VictorCarvalho16" target="_blank">
          <FaGithub />
        </a>
      </Social>
      Victor Carvalho © 2020
    </FooterDiv>
  )
}

export default Footer
