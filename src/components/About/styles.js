import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`

export const AboutGlobalStyles = createGlobalStyle`
  .About-h2 {
    font-size: 40px;
    text-align: center;
  }
  .About-h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 35px;
    text-align: center;
    ${MQ.lg`
      text-align: left;
    `}
  }
  .About-Text--Col_r {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    ${MQ.lg`
      align-items: flex-start;
    `}
  }
  .About-Text--Col_l {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    ${MQ.lg`
      align-items: flex-start;
    `}
  }
  .About-Image--Col-l {
    display: flex;
    justify-content: center;
  }
  .About-Image--Col-r {
    display: flex;
    justify-content: center;
  }
  .col-l {
    .About-h3  {
      padding-left: 0;
      ${MQ.lg`
        padding-left: 35px;
      `}
    }
  }
  .col-r {
    .About-h3  {
      padding-left: 0;
      ${MQ.lg`
        padding-left: 37px;
      `}
    }
  }
  .About-li {
    font-size: 16px;
    margin-bottom: 5px;
    svg {
      color: #94B44C;
      margin-right: 10px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
`
