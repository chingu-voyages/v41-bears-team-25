import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";

// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
// Provide the Redux store to the React application components
// Put a React-Redux <Provider> component around your <App />
// Pass the Redux store as <Provider store={store}>
// Create a Redux "slice" reducer with createSlice
// Call createSlice with a string name, an initial state, and named reducer functions
// Reducer functions may "mutate" the state using Immer
// Export the generated slice reducer and action creators
// Use the React-Redux useSelector/useDispatch hooks in React components
// Read data from the store with the useSelector hook
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed

const ReduxTest = () => {
  // this is very similar useState and dispatch can give you access to the
  // redux functions in the slice
  const counterSlice = useSelector((store) => store.counterSlice.value);
  const dispatch = useDispatch();

  const [counterInput, setCounterInput] = useState(0);

  const onInputChange = (e) => {
    setCounterInput(parseInt(e.target.value, 10));
  };

  const onIncrementSubmit = () => {
    dispatch(incrementByAmount(counterInput));
  };

  return (
    <>
      <div>ReduxTest</div>
      <div>{counterSlice}</div>
      <button
        onClick={() => dispatch(increment())}
        aria-label="Increment value"
      >
        Add 1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        aria-label="Decrement value"
      >
        Subtract 1
      </button>
      <input
        value={counterInput}
        onChange={onInputChange}
        aria-label="Value Change Field"
      />
      <button onClick={onIncrementSubmit} aria-label="Increment value">
        Submit
      </button>
    </>
  );
};

export default ReduxTest;
