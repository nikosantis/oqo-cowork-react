import React from 'react'
import { GetInfo } from './components/GetInfo'
import { FooterLayout } from './components/FooterLayout'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <GetInfo />
    <FooterLayout />
  </>
)
