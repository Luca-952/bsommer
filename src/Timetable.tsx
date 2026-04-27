import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Timetable = () => (
  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h4" gutterBottom>Dein Zeitplan</Typography>
    <TableContainer component={Paper} sx={{ maxWidth: 600, width: '100%' }}>
      <Table>
        <TableHead sx={{ bgcolor: 'secondary.main' }}>
          <TableRow>
            <TableCell><strong>Datum</strong></TableCell>
            <TableCell><strong>Event</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>05.05.2026</TableCell>
            <TableCell>Großer Launch</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default Timetable;