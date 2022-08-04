import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartSlice from './cartSlice';
import ProductSlice from './ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    prod: ProductSlice,
    cart:cartSlice
  },
});
