import { Typography, Box, ImageList, ImageListItem, Container } from '@mui/material';

const Diary = () => {
  // Beispiel-Daten für deine Fotowand
  const itemData = [
    { img: 'https://picsum.photos/500/600?random=1', title: 'Moment 1' },
    { img: 'https://picsum.photos/500/400?random=2', title: 'Moment 2' },
    { img: 'https://picsum.photos/500/700?random=3', title: 'Moment 3' },
    { img: 'https://picsum.photos/500/500?random=4', title: 'Moment 4' },
    { img: 'https://picsum.photos/500/450?random=5', title: 'Moment 5' },
    { img: 'https://picsum.photos/500/550?random=6', title: 'Moment 6' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh'
      }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#F075AE', fontWeight: 'bold' }}>
          Fotowand
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
          Ein Blick zurück auf unsere schönsten Momente.
        </Typography>

        {/* Die ImageList passt die Spaltenanzahl automatisch an (1 Spalte mobil, 3 Desktop) */}
        <ImageList
          variant="masonry"
          cols={window.innerWidth < 600 ? 1 : 3}
          gap={16}
          sx={{ width: '100%', maxWidth: 1000 }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{ display: 'block', width: '100%' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default Diary;