import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins/400.css"; // regular
import "@fontsource/poppins/600.css"; // semi-bold (optional)
import "@fontsource/poppins/700.css"; // bold (optional)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
