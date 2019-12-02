import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const Section = styled.section`
  background: #000000;
  padding-top: 80px;
  padding-bottom: 80px;
`

export const SeparatorPriceGlobalStyles = createGlobalStyle`
  .SeparatorPrice-h2 {
    font-size: 30px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
    strong {
      font-weight: 700;
    }
    ${MQ.lg`
    font-size: 36px;
    `}
  }
`
