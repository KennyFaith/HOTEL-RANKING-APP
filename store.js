import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './features/hotels/hotelsSlice';
import categoriesReducer from './features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    categories: categoriesReducer,
  },
});

