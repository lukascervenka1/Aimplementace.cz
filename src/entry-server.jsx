import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Used by scripts/prerender.mjs at build time — pure server-side render,
// no browser involved. GSAP/ScrollTrigger no-op safely when `document`
// doesn't exist (documented Node/SSR behavior), and none of the app's
// effects run during renderToString, so this produces exactly the same
// markup the client would show on its very first paint, before any
// useEffect-driven animation kicks in.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
