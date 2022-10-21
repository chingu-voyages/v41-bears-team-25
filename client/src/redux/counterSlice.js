import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// name
// initialState object
// reducers: an object holding a function for each action type
// ex:
// reducers: { nameOfAction: (state, action) => { ... } }
// you can pass in the action to get the payload as you can see in incrementByAmount

export const counterSlice = createSlice({
  name: "counter",
  initialState, // passes in as state below
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
