import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Typography } from '@mui/material';
import Countdown from 'react-countdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <Typography variant="h2" gutterBottom> Bald </Typography>
      <Typography variant="h1" sx={{ color: '#0050B5' }} gutterBottom> <Countdown date={new Date('2026-05-01T00:00:00')} /> </Typography>

      </div>
    </>
  )
}

export default App
