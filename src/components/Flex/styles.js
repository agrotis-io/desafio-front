import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  align-items: ${({ alignItens }) => alignItens};
  background: ${({ background }) => background};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => (Array.isArray(margin) ? margin[0] : margin)};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  position: relative;
  width: ${({ width }) => width};

  & > * {
    margin-bottom: ${({ gap, direction }) => (direction === 'column' && gap)};
    margin-right: ${({ gap, direction }) => (direction === 'row' && gap)};
  }

  @media ${variables.deviceSize.tablet} {
    margin: ${({ margin }) => (Array.isArray(margin) ? margin[1] : margin)};
  }

  @media ${variables.deviceSize.desktop} {
    margin: ${({ margin }) => (Array.isArray(margin) ? margin[1] : margin)};
  }
`
