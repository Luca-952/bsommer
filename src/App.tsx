import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import Countdown from 'react-countdown';

// Deine ausgelagerten Seiten
import Home from '/home/luca/Repos/bsommer/src/Home.tsx';
import Timetable from '/home/luca/Repos/bsommer/src/Timetable.tsx';
import Diary from '/home/luca/Repos/bsommer/src/SommerLog.tsx';

const theme = createTheme({
  palette: {
    primary: { main: '#F075AE' },
    secondary: { main: '#9BC264' },
    background: { default: '#FFFDCE' }
  },
});

function App() {
  const [isLive, setIsLive] = useState(false);

  if (!isLive) {
    return (
      <Box sx={{
        height: '100vh', width: '100vw', display: 'flex',
        flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', bgcolor: '#FFFDCE'
      }}>
        <Typography variant="h2" sx={{ color: '#F075AE' }}>Bald</Typography>
        <Typography variant="h1" sx={{ color: '#0050B5' }}>
          <Countdown date={new Date('2026-04-05T00:00:00')} onComplete={() => setIsLive(true)} />
        </Typography>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="sticky" elevation={0}>
          <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/timetable">Timetable</Button>
            <Button color="inherit" component={Link} to="/diary">Diary</Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ minHeight: '90vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;