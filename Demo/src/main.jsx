import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './todo_render.jsx'
//import App from './wrapper.jsx'
import App from './useEffect.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
