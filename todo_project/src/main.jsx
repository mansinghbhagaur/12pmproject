import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomTheme } from './theme/CustomTheme.jsx'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <CustomTheme>
    {/* <CssBaseline /> */}
    <App />
  </CustomTheme>,
)
