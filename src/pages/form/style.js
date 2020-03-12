import React from 'react'
import styled from 'styled-components'

const _header = ( { className, children } ) => (
  <header className={className} >{children}</header>
)

export const Header = styled(_header)`
  width: 100vw;
  height: 4rem;
  background-color: #145e43;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
  color: white;
`
export const backButton = {
  fontWeight: 'bold',
  color: 'white'
}

export const title = {
  margin: 'auto 1rem'
}

export const customInput = {
  borderRadius: '0px',
  border: 'none',
  borderBottom: 'solid lightgray thin'
}

const btn = ( { className, children } ) => (
  <button className={className} onClick={this.props.action} >{children}</button>
)

export const Button = styled(btn)`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: .25rem;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
`