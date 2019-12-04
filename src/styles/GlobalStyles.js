import { createGlobalStyle } from 'styled-components'
import { MQ } from './Media'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  .btn-black {
    color: #fff;
    background-color: #000000;
    border-color: #000000;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 15px 50px;
    &:hover {
      background-color: #343a40;
      border-color: #343a40;
      color: #fff;
    }
  }

  .btn-white {
    color: #ffffff;
    background-color: transparent;
    border-color: #ffffff;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 15px 50px;
    &:hover {
      background-color: #000000;
      border-color: #000000;
      color: #ffffff;
    }
  }

  .btn-grey {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 15px 50px;
    &:hover {
      background-color: #343a40;
      border-color: #343a40;
      color: #fff;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    color: #ffffff;
    ${MQ.lg`
      font-size: 40px;
    `}
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
    ${MQ.lg`
      font-size: 40px;
    `}
  }
`
