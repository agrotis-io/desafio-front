import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 12px 5px;
  position: relative;
`

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.w300};
  color: ${({ theme }) => theme.colors.text.w000};
  outline: none;
  padding: 5px 15px;

  &::selection {
    background: ${({ theme }) => theme.colors.text.w500};
  }

  &:focus + label, &:valid + label {
    font-size: 0.7em;
    top: 0;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.w000};
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 15px;
  transition: ease 200ms all;
`
export const Counter = styled.span`
  color: ${({ theme }) => theme.colors.text.w000};
  font-size: ${variables.fontSizes.sm};
  margin-left: auto;
  margin-top: 3px;
`
