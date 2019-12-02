import React from 'react'
import { HeaderLayout, HeaderContent, LogoBox, HeaderGlobalStyles } from './styles'
import { SliderBg, SliderText } from '../HeaderCarousel'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import { Logo } from '../Logo'
import { FormLayout } from '../FormBox'

export const Header = () => {
  return (
    <>
      <HeaderGlobalStyles />
      <HeaderLayout>
        <SliderBg />
        <HeaderContent>
          <Container>
            <Row className='Header-Row'>
              <Col lg={5}>
                <LogoBox>
                  <Logo />
                </LogoBox>
                <h1>Arriendo Espacio Cowork</h1>
                <SliderText />
              </Col>
              <Col lg={5} xs={7} className='offset-lg-1 FormBox d-none d-sm-none d-md-none d-lg-block'>
                <FormLayout />
              </Col>
            </Row>
          </Container>
        </HeaderContent>
      </HeaderLayout>
    </>
  )
}
