import React from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import { Container, Text } from './styles'
import { useDispatch } from 'react-redux'
import { changeToastStatus } from 'actions'

export default function Toast ({ text }) {
  const dispatch = useDispatch()

  function handleClick () {
    dispatch(changeToastStatus(false))
  }

  return (
    <Container>
      <Text>{text}</Text>
      <div onClick={handleClick}>
        <Icon name='close' width='20' />
      </div>
    </Container>
  )
}

Toast.propTypes = {
  text: PropTypes.string.isRequired
}
