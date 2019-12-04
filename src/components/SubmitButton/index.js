import React from 'react'
import { ButtonBlack } from '../Buttons/styles'

export const SubmitButton = ({ children, onClick, className, enable }) => {
  return (
    <ButtonBlack disabled={enable} onClick={onClick} className={className}>{children}</ButtonBlack>
  )
}
