import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  numberProducts: 0,
};

// name
// initialState object
// reducers: an object holding a function for each action type
// ex:
// reducers: { nameOfAction: (state, action) => { ... } }
// you can pass in the action to get the payload as you can see in incrementByAmount

export const allProducts = createSlice({
  name: "allProducts",
  initialState, // passes in as state below
  reducers: {
    setProductsData: (state, action) => {
      state.products = [...action.payload];
      state.numberProducts = action.payload.length;
    },
  },
});

export const { setProductsData } = allProducts.actions;

export default allProducts.reducer;
