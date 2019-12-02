import React from 'react'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import { IntroCarousel } from '../IntroCarousel'
import { Section } from './styles'

export const SeparatorIntro = () => (
  <>
    <Section>
      <Container>
        <Row>
          <Col lg='12'>
            <IntroCarousel />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)
