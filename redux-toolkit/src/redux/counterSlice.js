import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      console.log(action);
    },
    decrement: (state) => {
      state.value -= 1;
      console.log(state);
    },
    reset: (state) => {
      state.value = 0;
    },
    amountbyMultiply: (state) => {
      state.value = state.value ** 10;
    },
  },
});

export const { increment, decrement, reset, amountbyMultiply } =
  counterSlice.actions;

export default counterSlice.reducer;
