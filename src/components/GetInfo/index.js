import React, { useState } from 'react'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import { Section, GetInfoStyles } from './styles'
import { ButtonBlack } from '../Buttons/styles'

export const GetInfo = () => {
  const [show, setShow] = useState(false)

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
                <ButtonBlack onClick={() => setShow(!show)}>Recibir Info</ButtonBlack>
                {show && <div>This text will show!</div>}
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  )
}
