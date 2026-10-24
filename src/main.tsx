import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Fallback for hosts that serve index.html for unknown paths (public/toolbox/
// handles the normal case).
if (/^\/toolbox\/?$/.test(window.location.pathname)) {
  window.location.replace('https://andriizelyk.github.io/Tools/')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
