import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    incrementByAmount: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
  },
});

// Grâce à Redux Toolkit,
// les actions sont générés directement à partir des reducers
export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
