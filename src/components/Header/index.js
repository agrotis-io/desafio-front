import React from 'react'
import Icon from '../Icon'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../store/actions'
import { Link } from 'react-router-dom'

export default function Header () {
  const { isDark } = useSelector(state => state.theme)

  const dispatch = useDispatch()

  function toggleTheme () {
    dispatch(changeTheme(!isDark))
  }

  return (
    <Container>
      <h1>
        <Link to='/' aria-label='Home'>
          <Icon name='logo' width='150' />
        </Link>
      </h1>
      <div onClick={toggleTheme}>
        <Icon name='dark' width='30' />
      </div>
    </Container>
  )
}
