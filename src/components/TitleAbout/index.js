import React from 'react'
import { H3 } from '@bootstrap-styled/v4'
import { TitleAboutGlobalStyles } from './styles'

export const TitleAbout = ({ title }) => {
  return (
    <>
      <TitleAboutGlobalStyles />
      <H3 className='About-h3'>{title}</H3>
    </>
  )
}
