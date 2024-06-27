import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteHotel } from '../features/hotels/hotelsSlice';

const HotelList = ({ setEditingHotel }) => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels);

  const handleDelete = (hotel) => {
    dispatch(deleteHotel(hotel));
  };

  return (
    <List>
      {hotels.map((hotel) => (
        <ListItem key={hotel.id} button>
          <ListItemText primary={hotel.name} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => setEditingHotel(hotel)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(hotel)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default HotelList;
