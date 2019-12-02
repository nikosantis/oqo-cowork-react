import React from 'react'
import { Section, AboutGlobalStyles } from './styles'
import { Container, Row, Col, Li } from '@bootstrap-styled/v4'
import { BoxAbout } from '../BoxAbout'
import { MdCheck } from 'react-icons/md'
import { ImgLayout } from '../ImgLayout'

export const About = () => {
  return (
    <>
      <AboutGlobalStyles />
      <Section>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='About-h2'>Conócenos</h2>
            </Col>
          </Row>
          <Row>
            <Col lg='7' xs='12' className='About-Image--Col-l order-2 order-lg-1'>
              <ImgLayout url='https://res.cloudinary.com/nikosantis/image/upload/v1574883242/cowork-oqo/about-1_wc4kpe.png' />
            </Col>
            <Col className='col-lg-5 col-12 About-Text--Col_r col-r order-1 order-lg-2'>
              <BoxAbout title='Seguridad'>
                <Li className='About-li'><MdCheck /> Acceso controlado 24/7</Li>
                <Li className='About-li'><MdCheck /> Recepción</Li>
                <Li className='About-li'><MdCheck /> CCTV</Li>
                <Li className='About-li'><MdCheck /> Oficina en altura (lejos de la calle)</Li>
              </BoxAbout>
            </Col>
          </Row>
          <Row>
            <Col lg='5' xs='12' className='offset-lg-1 About-Text--Col_l col-l'>
              <BoxAbout title='Optimiza tu workflow'>
                <Li className='About-li'><MdCheck /> Planta libre de 65 m2 habilitada con muebles</Li>
                <Li className='About-li'><MdCheck /> 15 puestos de trabajo exclusivo</Li>
                <Li className='About-li'><MdCheck /> Acceso a 3 salas de reuniones</Li>
                <Li className='About-li'><MdCheck /> Wifi</Li>
              </BoxAbout>
            </Col>
            <Col lg='6' xs='12' className='About-Image--Col-r'>
              <ImgLayout url='https://res.cloudinary.com/nikosantis/image/upload/v1574883242/cowork-oqo/about-2_myfysa.png' />
            </Col>
          </Row>
          <Row>
            <Col lg='7' xs='12' className='About-Image--Col-l order-2 order-lg-1'>
              <ImgLayout url='https://res.cloudinary.com/nikosantis/image/upload/v1574883242/cowork-oqo/about-3_gx37ug.png' />
            </Col>
            <Col lg='5' xs='12' className='About-Text--Col_l col-l col-r order-1 order-lg-2'>
              <BoxAbout title='Más comodidad'>
                <Li className='About-li'><MdCheck /> Aire acondicionado</Li>
                <Li className='About-li'><MdCheck /> Cocina y comedor</Li>
                <Li className='About-li'><MdCheck /> Aseo</Li>
                <Li className='About-li'><MdCheck /> Estacionamiento para arriendo adicional</Li>
              </BoxAbout>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
