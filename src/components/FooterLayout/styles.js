import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const Footer = styled.footer`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #000000;
  text-align: center;
  ${MQ.lg`
    text-align: left;
  `}
`

export const FooterStyles = createGlobalStyle`
  h3 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  ul {
    margin-bottom: 50px;
    ${MQ.lg`
      margin: 0;
    `}
    li {
      a {
        color: #8D8D8D;
        font-size: 16px;
        font-weight: 500;
        &:hover {
          color: #f1f1f1;
          text-decoration: none;
        }
      }
    }
  }
  .FooterSocial {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    ${MQ.lg`
      justify-content: flex-start;
    `}
    a {
      margin-right: 20px;
      svg {
        color: #8D8D8D;
        font-size: 30px;
      }

      &:hover svg {
        color: #f1f1f1;
      }
    }
  }
`
