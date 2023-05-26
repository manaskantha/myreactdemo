import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    decrease(state, action) {
      state.value = state.value - action.payload;
    },
  },
});

// function addReducer(state = initialState, action) {
//   // switch (action.type) {
//   //   case "INCREMENT":
//   //     return { ...state, value: state.value + action.amount };
//   //   case "DECREMENT":
//   //     return { ...state, value: state.value - action.amount };
//   //   default:
//   //     return state;
//   // }
//   return state;
// }

//export counterSlice;

export const reducerActions = counterSlice.actions;
