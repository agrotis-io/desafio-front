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

const divFooter = ( { className, children } ) => (
  <div className={className} >{children}</div>
)

export const Footer = styled(divFooter)`
  display: flex;
  flex-direction: row-reverse;
`

const btn = ( { className, children } ) => (
  <button className={className} >
    { children }
  </button>
)

export const Button = styled(btn)`
  color: white;
  font-weight: bolder;
  border: none;
  font-size: 3rem;
  margin: 1rem;
  border-radius: 3px;
  padding: 0px 1.25rem;
  background-color: #b45f06;
`;

export const Container = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
`
const _card = ( { className="", children } ) => (
  <div className={className+' card'}>
    { children }
  </div>
)

export const Card = styled(_card)`
  padding: 1rem 1rem 0.5rem 1rem;
  margin: 1rem 0px;

  display: flex;
  flex-direction: row;
  /* align-items: center; */

  border-radius: 1rem;
  border: solid lightgray thin;
`