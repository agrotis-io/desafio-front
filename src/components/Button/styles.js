import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.button`
  align-items: center;
  background: ${({ hasBackground }) => (hasBackground ? variables.colors.primary.w600 : 'transparent')};
  border-radius: 3px;
  border: 2px solid ${({ hasBackground }) => (hasBackground ? variables.colors.primary.w800 : 'transparent')};
  color: ${variables.colors.text.w000};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  text-transform: uppercase;
  width: auto;

  &:hover {
    border: 2px solid ${variables.colors.text.w000};
  }
`
