import React from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { SeparatorIntro } from './components/SeparatorIntro'
import { SeparatorView } from './components/SeparatorView'
import { SeparatorPrice } from './components/SeparatorPrice'
import { SeparatorImg } from './components/SeparatorImg'
import { GetInfo } from './components/GetInfo'
import { FooterLayout } from './components/FooterLayout'
import { GlobalStyle } from './styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <SeparatorIntro />
    <About />
    <SeparatorView />
    <SeparatorPrice />
    <SeparatorImg />
    <GetInfo />
    <FooterLayout />
  </>
)
