import React, { useState } from 'react'
import { Col, Input } from '@bootstrap-styled/v4'
import { FormGroup } from 'styled-bootstrap-components'
import { FormBox, ContainerBox, SuccessBox, FormGlobalStyles } from './styles'
import { SubmitButton } from '../SubmitButton/index'
import { useInputValue } from '../../hooks/useInputValue'
import * as emailjs from 'emailjs-com'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  dataLayer: {
    event: 'sentForm'
  }
}

export const FormLayout = () => {
  const [visible, setVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState('disabled')
  const [errors, setErrors] = React.useState({})

  function hideForm () {
    setTimeout(() => setVisible(false), 650)
  }

  function validateEmail (value) {
    const errors = {}
    if (value === '') {
      errors.email = 'El mail es requerido'
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors.email = 'El formato de mail es inválido'
    }
    return errors
  }

  function onBlur (e) {
    setErrors(validateEmail(e.target.value), setDisabled(''))
  }

  const styleVisible = {}
  if (!visible) styleVisible.display = 'none'

  const styleHidden = { display: 'none' }
  if (!visible) styleHidden.display = 'block'

  const name = useInputValue('')
  const email = useInputValue('')
  const empresa = useInputValue('')
  const rut = useInputValue('')
  const web = useInputValue('')

  const USERID = process.env.REACT_APP_EMAILJS_USERID
  const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID
  const TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID

  function handleClick () {
    setIsLoading(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const templateParams = {
      userName: name.value,
      userEmail: email.value,
      userBusiness: empresa.value,
      userRutBusiness: rut.value,
      userWeb: web.value
    }

    emailjs.send(SERVICEID, TEMPLATEID, templateParams, USERID)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text)
        setDisabled('disabled')
        hideForm()
        setIsLoading(false)
        TagManager.dataLayer(tagManagerArgs)
      }, function (error) {
        console.log('FAILED...', error)
      })
  }

  return (
    <ContainerBox>
      <FormBox onSubmit={handleSubmit} style={styleVisible}>
        <FormGlobalStyles />
        <h3 className='Form-h3'>Me Interesa</h3>
        <FormGroup row>
          <Col lg='12'>
            <Input name='name' type='text' placeholder='Nombre' className='Form-Input' {...name} required />
            <Input name='email' type='email' placeholder='Mail' className='Form-Input' {...email} required onBlur={onBlur} />
            <Input name='empresa' type='text' placeholder='Empresa' className='Form-Input' {...empresa} />
            <Input name='rut' type='text' placeholder='Rut Empresa' className='Form-Input' {...rut} />
            <Input name='web' type='text' placeholder='Web' className='Form-Input' {...web} />
            {errors.email && <span class='badge badge-danger m-3'>{errors.email}</span>}
          </Col>
          <Col lg='12'>
            <SubmitButton enable={disabled} className='Form-Button' onClick={() => handleClick()}>
              {
                isLoading
                  ? (
                    <div className='spinner-border text-light' role='status'>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  )
                  : 'Enviar'
              }
            </SubmitButton>
          </Col>
        </FormGroup>
      </FormBox>
      <SuccessBox style={styleHidden}>
        <span className='badge badge-dark my-1'>Mensaje Enviado</span>
        <h4 className='my-5'>Gracias!!! Pronto nos contactaremos contigo</h4>
      </SuccessBox>
    </ContainerBox>
  )
}
