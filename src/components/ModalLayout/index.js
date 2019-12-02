import React, { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader
} from 'styled-modal-component'
import { ButtonBlack, ButtonClose } from '../Buttons/styles'
import { FormLayout } from '../FormBox'

export const ModalGetInfo = () => {
  const [hidden, setHidden] = useState(true)

  return (
    <div>
      <Modal hidden={hidden} toggle={() => setHidden(!hidden)} centered md>
        <ModalHeader>

          <ButtonClose outline onClick={() => setHidden(!hidden)}>
            <span aria-hidden='true'>&times;</span>
          </ButtonClose>
        </ModalHeader>

        <ModalBody>
          <FormLayout />
        </ModalBody>
      </Modal>

      <ButtonBlack block danger onClick={() => setHidden(!hidden)}>
        Recibir Info
      </ButtonBlack>
    </div>
  )
}
