import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import HotelForm from '../components/HotelForm';
import HotelList from '../components/HotelList';

const HotelsPage = () => {
  const [editingHotel, setEditingHotel] = useState(null);

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Hotels
      </Typography>
      <Box mb={4}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <HotelForm editingHotel={editingHotel} setEditingHotel={setEditingHotel} />
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <HotelList setEditingHotel={setEditingHotel} />
        </Paper>
      </Box>
    </Container>
  );
};

export default HotelsPage;
