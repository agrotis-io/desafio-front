import React from 'react'
import Flex from '../../components/Flex'
import Search from '../../components/Search'
import Title from '../../components/Title'
import Situation from '../../components/Situation'
import Icon from '../../components/Icon'
import Absolute from '../../components/Absolute'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export default function Home () {
  return (
    <>
      <Flex
        direction='column'
        margin={['0', '30px', '30px']}
      >
        <Flex direction='column'>
          <Flex justifyContent='space-between' alignItens='center' padding='10px 30px' background={variables.colors.primary.w800}>
            <Title text='Situações do documento' />
            <Search />
          </Flex>
          <Flex
            alignItens='flex-start'
            background={({ theme }) => theme.colors.background.w300}
            direction='column'
            margin='0 0 50px 0'
            minHeight='50vh'
            padding='30px'
          >
            <Absolute bottom='-20px' right='20px'>
              <Link to='/registre' aria-label='Adicionar situação'>
                <Icon name='plus' color={variables.colors.secondary.w900} width='40' />
              </Link>
            </Absolute>
            <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
            <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
            <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
            <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
            <Situation name='Andamento' description='Quando o crontrato está em andamento e não pode ser alterado' />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
