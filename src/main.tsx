import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'
import { HashRouter } from 'react-router-dom'

import './styles.css'
import { ThemeContext } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeContext>
        <Portfolio />
      </ThemeContext>
    </HashRouter>
  </React.StrictMode>
)
