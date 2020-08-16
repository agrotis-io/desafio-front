import React from 'react'
import { useId } from 'react-id-generator'
import { useForm, FormProvider } from 'react-hook-form'
import { addSituation } from 'store/actions'
import { useDispatch } from 'react-redux'
import InputValue from 'components/InputValue'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export default function Form () {
  const methods = useForm()
  const [htmlId] = useId()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submitValues (values) {
    dispatch(addSituation({
      id: htmlId,
      name: values.name,
      description: values.description
    }))
    navigate('/')
  }

  return (
    <FormProvider {...methods}>
      <Container id='form' onSubmit={methods.handleSubmit(submitValues)}>
        <InputValue name='name' placeholder='Nome' length='20' />

        <InputValue name='description' placeholder='Descrição' length='240' />
      </Container>
    </FormProvider>
  )
}
