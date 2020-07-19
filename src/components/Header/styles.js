import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.w300};
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: auto;
`
