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
  gap: '0',
  justifyContent: 'initial',
  margin: 'initial',
  minHeight: 'initial',
  padding: 'initial',
  width: 'initial'
}

Flex.propTypes = {
  alignItens: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.any,
  direction: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  justifyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
}
