import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.w300};
  border: 1px solid ${({ theme }) => theme.colors.background.w500};
  border-radius: 3px;
  cursor: default;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 10px;
  position: relative;
  width: 100%;

  &:hover{
    background: ${({ theme }) => theme.colors.background.w400};
    svg {
    display: block;
  }
  }

  @media ${variables.deviceSize.tablet} {
    grid-template-columns: 1fr 2fr;
  }
`
export const Label = styled.p`
  color: ${({ theme }) => theme.colors.text.w300};
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.w000};
  font-weight: 600;
`
export const Section = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 3fr;
  margin: 15px;
  @media ${variables.deviceSize.tablet} {
    align-items: center;
    grid-template-columns: auto 1fr;
  }
`
