import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Starts the React application and renders it into index.html

// The StrictMode component is a wrapper that helps identify potential
// problems in an application.
