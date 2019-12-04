import React from 'react'
import { Section, ImgOverlay, SeparatorViewGlobalStyles } from './styles'

const IMG_URL = 'https://res.cloudinary.com/nikosantis/image/upload/v1575408719/cowork-oqo/oqoview_picture_kv4fju.jpg'

export const SeparatorView = () => {
  return (
    <>
      <SeparatorViewGlobalStyles />
      <Section img={IMG_URL}>
        <div className='container forOver'>
          <div className='row SeparatorView-row'>
            <div className='col-lg-4'>
              <h2 className='SeparatorView-h2'>Disfruta de una increíble vista</h2>
              <p className='SeparatorView-p'>Encuentra un grato ambiente de trabajo y disfruta una gran vista panorámica de Santiago.</p>
            </div>
          </div>
        </div>
        <ImgOverlay />
      </Section>
    </>
  )
}
