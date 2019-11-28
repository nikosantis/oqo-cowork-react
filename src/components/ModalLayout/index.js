import React from 'react'
import { Modal, ModalHeader, ModalBody } from '@bootstrap-styled/v4'
import { ButtonLayout } from '../Buttons'

export const ModalLayout = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <ButtonLayout color='black'>Test</ButtonLayout>
    </div>
  )
}
