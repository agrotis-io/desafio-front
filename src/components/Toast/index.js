import React from 'react'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import { Container, Text } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeToastStatus } from 'store/actions'

export default function Toast ({ text }) {
  const dispatch = useDispatch()
  const { toast } = useSelector(state => state)

  toast && setTimeout(() => closesToast(), 3000)

  function closesToast () {
    dispatch(changeToastStatus(false))
  }

  return (
    <Container>
      <Text>{text}</Text>
      <div onClick={closesToast}>
        <Icon name='close' width='20' />
      </div>
    </Container>
  )
}

Toast.propTypes = {
  text: PropTypes.string.isRequired
}
