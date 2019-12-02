import { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const TitleAboutGlobalStyles = createGlobalStyle`
  .About-h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 35px;
    text-align: center;
    ${MQ.lg`
      text-align: left;
    `}
  }
`
