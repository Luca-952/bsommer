import { Typography, Box } from '@mui/material';

const Home = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    minHeight: '80vh', textAlign: 'center'
  }}>
    <Typography variant="h2">Willkommen Zuhause</Typography>
    <Typography variant="body1">Hier beginnt deine Reise.</Typography>
  </Box>
);

export default Home;