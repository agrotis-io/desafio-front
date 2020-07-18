import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  align-items: center;
  background: ${variables.colors.primary.w600};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: auto;

  &:hover{
    background: ${variables.colors.primary.w800};
  }
`
export const Text = styled.p`
  color: ${variables.colors.text.w000};
  margin-right: 25px;
`
