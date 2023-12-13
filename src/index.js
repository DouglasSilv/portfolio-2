import React from 'react'
import ReactDOM from 'react-dom'
import "./i18n";
import App from './components/App'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
