import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { initReveals } from './animations'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// init reveals after render
setTimeout(()=> initReveals(), 120)
