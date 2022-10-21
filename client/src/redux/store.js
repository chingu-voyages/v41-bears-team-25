import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// add all reducer files to the store to have configureStore create
// the redux state for you

const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
  },
});

export default store;
