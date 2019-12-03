import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import TagManager from 'react-gtm-module'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const tagManagerArgs = {
  gtmId: 'GTM-M5B4PKQ'
}
TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <GoogleReCaptchaProvider
    reCaptchaKey='6Ld268UUAAAAACg4TpoyUAQ-eSLW0fPG1kSK2Bsb'
  >
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById('app')
)
