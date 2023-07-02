import '@fontsource/inter'
import './shared/assets/styles/index.css'
import './shared/locales'
import './shared/plugins'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
