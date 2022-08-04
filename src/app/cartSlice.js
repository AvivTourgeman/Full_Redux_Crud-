import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCart,buyProduct,removeProduct} from './cartAPI';

const initialState = {
  orders: [],
  status: 'idle',
};

export const getcartAsync = createAsyncThunk(
  'cart/getCart',
  async () => {
    const response = await getCart();
    return response.data;
  }
);

export const buyAsync = createAsyncThunk(
  'cart/buyProduct',
  async (newProd) => {
    const response = await buyProduct(newProd);
    return response.data;
  }
);

export const removeProdAsync = createAsyncThunk(
  'cart/removeProduct',
  async (id) => {
    const response = await removeProduct(id);
    return id;
  }
);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getcartAsync.fulfilled, (state,action) => {
        state.orders=action.payload
        console.log(action.payload)
       
      })
      .addCase(buyAsync.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        console.log(action.payload) ;
      })
      .addCase(removeProdAsync.fulfilled, (state, action) => {
        state.orders = state.orders.filter (x => x.id !== action.payload);
        console.log(action.payload) ;
      });
  },
});


export const selectCart = (state) => state.cart.orders;
export default cartSlice.reducer;
