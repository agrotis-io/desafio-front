import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme, isActive }) => (isActive ? theme.colors.background.w300 : 'transparent')};
  border-radius: 3px;
  display: flex;
  padding: 10px 15px;
  width: ${({ isActive }) => (isActive ? '100%' : 'auto')};

  svg {
    @media ${variables.deviceSize.mobile} {
      fill: ${({ isActive }) => (isActive || 'white')};
    }
  }

  @media ${variables.deviceSize.tablet} {
    background: ${({ theme }) => theme.colors.background.w300};
    width: auto;
  }
`

export const Input = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.w300};
  margin-left: ${({ isActive }) => (isActive ? '15px' : '0')};
  outline: none;
  padding: 0;
  width: ${({ isActive }) => (isActive ? '100%' : '0')};

  @media ${variables.deviceSize.tablet} {
    margin: 0%;
    padding: 0 10px;
    width: 100%;

    &::selection {
      background: ${({ theme }) => theme.colors.text.w500};
    }
  }
`
