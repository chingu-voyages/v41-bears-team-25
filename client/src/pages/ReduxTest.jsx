import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsData } from "../redux/allProducts";

// import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
const mockPotsData = [
  // to be deleted when API is ready
  {
    id: 20129,
    name: "Aya Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Aya Pot description",
  },
  {
    id: 32423,
    name: "Bella Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Bella Pot description",
  },
  {
    id: 23423,
    name: "Coco Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Coco Pot description",
  },
  {
    id: 234231,
    name: "Dora Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Dora Pot description",
  },
  {
    id: 12454,
    name: "Ella Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Ella Pot description",
  },
  {
    id: 89981279,
    name: "Fiona Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Fiona Pot description",
  },
];

const ReduxTest = () => {
  // this is very similar useState and dispatch can give you access to the
  // redux functions in the slice
  const allProductsSlice = useSelector((store) => store.allProductsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsData(mockPotsData));
  }, [dispatch]);

  console.log(allProductsSlice);
  // const onIncrementSubmit = () => {
  //   dispatch(setProductsData(counterInput));
  // };

  return (
    <>
      <div>ReduxTest</div>
    </>
  );
};

export default ReduxTest;

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

// const ReduxTest = () => {
//   // this is very similar useState and dispatch can give you access to the
//   // redux functions in the slice
//   const counterSlice = useSelector((store) => store.counterSlice.value);
//   const dispatch = useDispatch();

//   const [counterInput, setCounterInput] = useState(0);

//   const onInputChange = (e) => {
//     setCounterInput(parseInt(e.target.value, 10));
//   };

//   const onIncrementSubmit = () => {
//     dispatch(incrementByAmount(counterInput));
//   };

//   return (
//     <>
//       <div>ReduxTest</div>
//       <div>{counterSlice}</div>
//       <button
//         onClick={() => dispatch(increment())}
//         aria-label="Increment value"
//       >
//         Add 1
//       </button>
//       <button
//         onClick={() => dispatch(decrement())}
//         aria-label="Decrement value"
//       >
//         Subtract 1
//       </button>
//       <input
//         value={counterInput}
//         onChange={onInputChange}
//         aria-label="Value Change Field"
//       />
//       <button onClick={onIncrementSubmit} aria-label="Increment value">
//         Submit
//       </button>
//     </>
//   );
// };

// export default ReduxTest;
