import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts,addProducts,updateProducts } from './prodAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const getProductAsync = createAsyncThunk(
  'prod/getProducts',
  async () => {
    const response = await getProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addProductsAsync = createAsyncThunk(
  'prod/addProducts',
  async (newProd) => {
    const response = await addProducts(newProd);
    return response.data;
  }
);

export const updateProductsAsync = createAsyncThunk(
  'prod/updateProducts',
  async (newProd) => {
    const response = await updateProducts(newProd,newProd.id);
    return response.data;
  }
);


export const prodSlice = createSlice({
  name: 'prod',
  initialState,
  // reducers are "asking questions" from the server, calling ther server , only a one way of passing info
 
  // reducers: {
  //   // sync function examples:

  //   // add: (state,action) => {
  //   //   console.log(action.payload)
  //   //   state.products.push(action.payload);
      
  //   // },
    
  //   // remove: (state) => {
  //   //   state.value -= 1;
  //   // },

  //   // update: (state, action) => {
  //   //   state.value += action.payload;
  //   // },
  // },
  
  // extraReducer taking answer from server and his job is to execute it on local data
  // STATE is local data  
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.fulfilled, (state,action) => {
        state.products=action.payload
        console.log(action.payload)
        // state.status = 'loading';
      })
      .addCase(addProductsAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
        console.log(action.payload) ;
      })
      .addCase(updateProductsAsync.fulfilled, (state, action) => {
        // find me this spesific id product with this id product(where x.id matches action.payload.id)
        
        let oldProd= state.products.find(x=> x.id === action.payload.id);
        oldProd.desc= action.payload.desc
        oldProd.price= action.payload.price
        console.log(action.payload) ;
      });
  },
});

// when i expose my state.products list, every component who 'listen' to state.products will be updated automaticallyת
//  when i update the server, the server updates back the extraReducers,
// the extraReducers updates back the list,
// and the component shows me the update

// export const { add, remove, update } = prodSlice.actions;
export const selectCount = (state) => state.prod.value;
export const selectProducts = (state) => state.prod.products;
export default prodSlice.reducer;
