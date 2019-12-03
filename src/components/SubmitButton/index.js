import React from 'react'
import { ButtonBlack } from '../Buttons/styles'

export const SubmitButton = ({ children, onClick, className }) => {
  return (
    <ButtonBlack onClick={onClick} className={className}>{children}</ButtonBlack>
  )
}
