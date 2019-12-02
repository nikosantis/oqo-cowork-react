import React from 'react'
import { TitleAbout } from '../TitleAbout'
import { Ul } from '@bootstrap-styled/v4'

export const BoxAbout = ({ title, children }) => {
  return (
    <>
      <TitleAbout title={title} />
      <Ul unstyled className='About-ul'>
        {children}
      </Ul>
    </>
  )
}
