import styled from 'styled-components'

export const Container = styled.div`
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  position: absolute;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
`
