import React from 'react'
import Flex from 'components/Flex'
import Title from 'components/Title'
import Icon from 'components/Icon'
import Button from 'components/Button'
import Form from 'components/Form'
import { Link } from 'react-router-dom'
import variables from 'styles/variables'

export default function Home () {
  return (
    <>
      <Flex
        direction='column'
        margin={['0', '30px', '30px']}
      >
        <Flex direction='column'>
          <Flex justifyContent='space-between' alignItens='center' padding='10px 30px' background={variables.colors.primary.w800}>
            <Link to='/'>
              <Icon name='arrow' direction='left' />
            </Link>
            <Title text='Situação' />
            <Flex gap='10px'>
              <Link to='/'>
                <Button text='Voltar' hasBackground={false} />
              </Link>
              <Button type='submit' text='Salvar' form='form' />
            </Flex>
          </Flex>
          <Flex
            alignItens='flex-start'
            background={({ theme }) => theme.colors.background.w300}
            direction='column'
            minHeight='50vh'
            padding='30px'
          >
            <Form />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
