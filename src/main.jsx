import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import './style.css'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
