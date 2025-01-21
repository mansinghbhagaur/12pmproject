import React from 'react'
import { Home } from './pages/Home'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.primary',
      minHeight: '98vh',
    }}>
      <Home />
    </Box>
  )
}

export default App
