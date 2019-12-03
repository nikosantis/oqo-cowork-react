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
import { Helmet } from 'react-helmet'

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Arriendo Espacio Cowork 👉 Únete a nuestro espacio creativo</title>
        <meta name='description' content='Si estás buscando un lugar para alojar tus ideas y a todo tu equipo, aquí en OQO te ofrecemos lo que estás buscando' />
      </Helmet>
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
}
