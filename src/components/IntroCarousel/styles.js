import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Box = styled.div`
  h3 {
    font-weight: 700;
    font-size: 26px;
  }
`

export const Image = styled.img`
  width: 85px !important;
  margin-right: 20px;
  align-self: center;
`

export const IntroCarouselGlobalStyles = createGlobalStyle`
  .SeparatorIntro__Carousel {
    .owl-nav {
      display: none;
      ${MQ.lg`
        display: block;
        position: absolute;
        bottom: 85%;
        left: 0;
        right: 0;
      `}
      span {
        color: #B7B7B7;
        font-size: 40px;
      }
      .owl-prev, .owl-next {
        &:hover {
          background: transparent;
          color: #B7B7B7;
          text-decoration: none;
        }
        &:focus {
          outline: none;
          text-decoration: none;
          box-shadow: none;
        }
      }
      .owl-prev {
        position: absolute;
        left: -40px;
      }
      .owl-next {
        position: absolute;
        right: -40px;
      }
    }
    .owl-dots {
      margin-top: 15px;
      ${MQ.lg`
        display: none !important;
      `}
    }
  }
`
