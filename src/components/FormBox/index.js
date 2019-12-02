import React from 'react'
import { Col, Input } from '@bootstrap-styled/v4'
import {
  FormCheck,
  FormCheckInput,
  FormControlFile,
  FormControlPlainText,
  FormGroup,
  FormInline,
  FormText
} from 'styled-bootstrap-components'
import { FormBox, FormGlobalStyles } from './styles'
import { ButtonBlack } from '../Buttons/styles'

export const FormLayout = () => {
  return (
    <>
      <FormBox>
        <FormGlobalStyles />
        <h3 className='Form-h3'>Me Interesa</h3>
        <FormGroup row>
          <Col lg='12'>
            <Input type='text' placeholder='Nombre' className='Form-Input' />
            <Input type='email' placeholder='Mail' className='Form-Input' />
            <Input type='text' placeholder='Empresa' className='Form-Input' />
            <Input type='text' placeholder='Rut Empresa' className='Form-Input' />
            <Input type='text' placeholder='Web' className='Form-Input' />
          </Col>
          <Col lg='12'>
            <ButtonBlack className='Form-Button'>
              Enviar
            </ButtonBlack>
          </Col>
        </FormGroup>
      </FormBox>
    </>
  )
}
