import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

export default function Flex ({
  alignItens,
  background,
  children,
  direction,
  gap,
  justifyContent,
  margin,
  minHeight,
  padding,
  width
}) {
  return (
    <Container
      alignItens={alignItens}
      background={background}
      direction={direction}
      gap={gap}
      justifyContent={justifyContent}
      margin={margin}
      minHeight={minHeight}
      padding={padding}
      width={width}
    >
      {children}
    </Container>
  )
}
Flex.defaultProps = {
  alignItens: 'initial',
  background: 'initial',
  direction: 'row',
  gap: 0,
  justifyContent: 'initial',
  margin: 'initial',
  minHeight: 'initial',
  padding: 'initial',
  width: 'initial'
}

Flex.propTypes = {
  alignItens: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.element,
  direction: PropTypes.string,
  gap: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  minHeight: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string
}
