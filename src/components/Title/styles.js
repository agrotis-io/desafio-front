import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.h2`
  display: none;
  @media ${variables.deviceSize.tablet} {
    color: ${variables.colors.text.w000};
    cursor: default;
    display: initial;
    font-size: ${variables.fontSizes.lg};
    width: 100%;
  }
`
