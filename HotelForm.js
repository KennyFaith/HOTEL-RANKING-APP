import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addHotel, updateHotel } from '../features/hotels/hotelsSlice';

const HotelForm = ({ editingHotel, setEditingHotel }) => {
  const dispatch = useDispatch();
  const [hotelName, setHotelName] = useState('');

  useEffect(() => {
    if (editingHotel) {
      setHotelName(editingHotel.name);
    } else {
      setHotelName('');
    }
  }, [editingHotel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingHotel) {
      dispatch(updateHotel({ ...editingHotel, name: hotelName }));
      setEditingHotel(null);
    } else {
      dispatch(addHotel({ name: hotelName }));
    }
    setHotelName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Hotel Name"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
        />
      </Box>
      <Button variant="contained" color="primary" type="submit">
        {editingHotel ? 'Update Hotel' : 'Add Hotel'}
      </Button>
    </form>
  );
};

export default HotelForm;
