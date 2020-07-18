import React from 'react'
import Toast from './index'

export default {
  title: 'Toast',
  component: Toast
}

export function Default () {
  return (
    <Toast text='Situação salva com sucesso' />
  )
}
