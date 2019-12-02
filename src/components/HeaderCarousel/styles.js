import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const Title = styled.h4`
  font-size: 22px;
  color: #ffffff;
  font-weight: 700;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 35px;
`

export const ItemBg = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 80px;
  text-align: center;
  background-image: url(${props => props.img});
  ${MQ.lg`
  display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    text-align: left;
  `}
`

export const HeaderCarouselGlobalStyles = createGlobalStyle`
  .CarouselHeader {
    height: 100vh;
  }
  .CarouselIntroText {
    h4 {
    font-size: 22px;
    color: #ffffff;
    font-weight: 700;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 35px;
    }
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
`
