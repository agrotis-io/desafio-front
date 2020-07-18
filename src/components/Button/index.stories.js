import React from 'react'
import Button from './index'

export default {
  title: 'Button',
  component: Button
}

export function Default () {
  return (
    <>
      <Button text='Salvar' />
      <Button text='Votlar' hasBackground={false} />
    </>
  )
}
