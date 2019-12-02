import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const Section = styled.section`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  padding-top: 120px;
  padding-bottom: 120px;
  background-image: url(${props => props.img});
`

export const SeparatorViewGlobalStyles = createGlobalStyle`
  .SeparatorView {
    &-row {
      -ms-flex-pack: end!important;
      justify-content: flex-end!important;
    }
    &-h2 {
      color: #ffffff;
      margin-bottom: 35px;
      text-align: center;
      ${MQ.lg`
        text-align: left;
      `}
    }
    &-p {
      color: #ffffff;
      text-align: center;
      margin: 0;
      ${MQ.lg`
        text-align: left;
      `}
    }
  }
`
