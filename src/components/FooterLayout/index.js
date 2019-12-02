import React from 'react'
import { Container, Row, Col, Ul, Li } from '@bootstrap-styled/v4'
import { Logo } from '../Logo'
import { Footer, FooterStyles } from './styles'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const FooterLayout = () => {
  return (
    <>
      <Footer>
        <FooterStyles />
        <Container>
          <Row>
            <Col lg='3'>
              <Logo />
            </Col>
            <Col lg='3'>
              <h3 className='Footer-h3'>Déjanos un mensaje</h3>
              <Ul unstyled>
                <Li><a href='tel:+56222456070' target='_blank'>Tel: +56 2 2245 6070</a></Li>
                <Li><a href='mailto:hola@oqo.cl' target='_blank'>Email: hola@oqo.cl</a></Li>
              </Ul>
            </Col>
            <Col lg='3'>
              <h3 className='Footer-h3'>Explora</h3>
              <Ul unstyled>
                <Li><a href='https://www.oqo.cl/somos' target='_blank'>Somos</a></Li>
                <Li><a href='https://www.oqo.cl/proyectos/' target='_blank'>Proyectos</a></Li>
                <Li><a href='https://www.oqo.cl/#marcas' target='_blank'>Marcas</a></Li>
                <Li><a href='https://www.oqo.cl/#equipo' target='_blank'>Equipo</a></Li>
              </Ul>
            </Col>
            <Col lg='3'>
              <h3 className='Footer-h3'>Dónde Estamos</h3>
              <div className='FooterSocial'>
                <a href='https://www.facebook.com/oqocl/' target='_blank'>
                  <FaFacebookSquare />
                </a>
                <a href='https://www.instagram.com/agenciaoqo/' target='_blank'>
                  <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/company/oqo_2/about/' target='_blank'>
                  <FaLinkedin />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  )
}
