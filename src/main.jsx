import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')

// Production build is prerendered (see scripts/prerender.mjs), so the
// container already holds the full markup — hydrate onto it instead of
// wiping and re-rendering from scratch. Dev server always starts with an
// empty div, so it falls back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
