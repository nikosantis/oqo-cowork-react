import React from 'react'
import { Section, SeparatorPriceGlobalStyles } from './styles'

export const SeparatorPrice = () => {
  return (
    <>
      <SeparatorPriceGlobalStyles />
      <Section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='SeparatorPrice-h2'>Precio arriendo desde <strong>UF 95 por mes</strong></h2>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
