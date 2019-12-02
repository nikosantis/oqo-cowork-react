import styled, { createGlobalStyle } from 'styled-components'
import { MQ } from '../../styles/Media'

export const HeaderLayout = styled.header`
  height: 100vh;
  position: relative;
`

export const HeaderContent = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-top: 0;
  text-align: center;
  ${MQ.sm`
    align-items: center;
  `}
  ${MQ.md`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding-top: 100px;
  `}
`

export const LogoBox = styled.div`
  margin-bottom: 30px;
`

export const HeaderGlobalStyles = createGlobalStyle`
  .Header-Row {
    -ms-flex-pack: center!important;
    justify-content: center!important;
  }
`
