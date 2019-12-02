import React from 'react'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import { Section, GetInfoStyles } from './styles'
import { ModalGetInfo } from '../ModalLayout'

export const GetInfo = () => {
  return (
    (
      <>
        <Section>
          <Container>
            <Row>
              <Col lg='12'>
                <GetInfoStyles />
                <h2>Amplía tu visión de negocio</h2>
                <p className='GetInfo-p'>Trabaja en un lugar con un gran potencial de colaboración creativa. ¡Te esperamos!</p>
                <ModalGetInfo />
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  )
}
