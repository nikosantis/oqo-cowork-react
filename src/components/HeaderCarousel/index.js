import React, { useState } from 'react'
import { useSlidersState } from '../../hooks/useSlidersState'
import { Title, Text, ItemBg, HeaderCarouselGlobalStyles } from './styles'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Modal } from 'react-bootstrap'
import { ButtonWhite } from '../Buttons/styles'

const API = 'https://api-cowork-oqo.now.sh/sliders'

export const SliderBg = () => {
  const images = useSlidersState(API)

  return images.length === 0 ? <p>Loading</p> : (
    images.length > 0 && (
      <>
        <HeaderCarouselGlobalStyles />
        <OwlCarousel
          className='owl-theme CarouselHeader'
          items={1}
          loop
          margin={0}
          autoplay
          autoplayTimeout={10000}
          smartSpeed={1000}
          dots={false}
        >
          {
            images.map(img => (
              <ItemBg img={img.src} key={img.id} />
            ))
          }
        </OwlCarousel>
      </>
    )
  )
}

function MyVerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Plano Cowork
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src='https://res.cloudinary.com/nikosantis/image/upload/v1574883243/cowork-oqo/Plane_nknmat.jpg' alt='Plano Cowork' className='img-fluid' />
      </Modal.Body>
    </Modal>
  )
}

export const SliderText = () => {
  const sliders = useSlidersState(API)
  const [modalShow, setModalShow] = useState(false)

  return sliders.length === 0 ? <p>Loading</p> : (
    sliders.length > 0 && (
      <>
        <HeaderCarouselGlobalStyles />
        <OwlCarousel
          className='owl-theme CarouselIntroText'
          items={1}
          loop
          margin={0}
          autoplay
          autoplayTimeout={10000}
          smartSpeed={700}
          dots={false}
          touchDrag={false}
        >
          {
            sliders.map(slider => (
              <div className='item' key={slider.id}>
                <Title>{slider.title}</Title>
                <Text>{slider.text}</Text>
              </div>
            ))
          }
        </OwlCarousel>
        <ButtonWhite block danger onClick={() => setModalShow(true)}>
          Ver El Espacio
        </ButtonWhite>

        <div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </>
    )
  )
}
