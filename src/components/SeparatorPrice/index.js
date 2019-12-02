import React from 'react'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import { Section, SeparatorPriceGlobalStyles } from './styles'

export const SeparatorPrice = () => {
  return (
    <>
      <SeparatorPriceGlobalStyles />
      <Section>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='SeparatorPrice-h2'>Precio arriendo desde <strong>UF 95 por mes</strong></h2>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
