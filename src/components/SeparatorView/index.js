import React from 'react'
import { Section, SeparatorViewGlobalStyles } from './styles'
import { Container, Row, Col } from '@bootstrap-styled/v4'

const IMG_URL = 'https://res.cloudinary.com/nikosantis/image/upload/v1575408719/cowork-oqo/oqoview_picture_kv4fju.jpg'

export const SeparatorView = () => {
  return (
    <>
      <SeparatorViewGlobalStyles />
      <Section img={IMG_URL}>
        <Container>
          <Row className='SeparatorView-row'>
            <Col lg='4'>
              <h2 className='SeparatorView-h2'>Disfruta de una increíble vista</h2>
              <p className='SeparatorView-p'>Encuentra un grato ambiente de trabajo y disfruta una gran vista panorámica de Santiago.</p>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
