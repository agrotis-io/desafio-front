import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSituations } from 'store/actions'

import Flex from 'components/Flex'
import Toast from 'components/Toast'
import Search from 'components/Search'
import Title from 'components/Title'
import Situation from 'components/Situation'
import Icon from 'components/Icon'
import Absolute from 'components/Absolute'

import { Link } from 'react-router-dom'
import variables from 'styles/variables'

export default function Home () {
  const { situations, toast } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getSituations()) }, [])

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
            {
              situations.loading &&
                <Icon name='loading' width='55' />
            }
            {
              situations.data.map(situation => (
                <Situation key={situation.id} name={situation.name} description={situation.description} situation={situation} />
              ))
            }
          </Flex>
        </Flex>
        {
          toast &&
            <div style={{ position: 'fixed', bottom: '0', left: 'calc(50% - 125px)' }}>
              <Toast text='Situação salva com sucesso' />
            </div>
        }
      </Flex>
    </>
  )
}
