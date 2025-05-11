import { createSlice } from "@reduxjs/toolkit";

const cartCounter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    maxValue: 100,
  },
  reducers: {
    increaseCounter: (state) => {
      state.value = state.value + 1;
    },
    decreaseCounter: (state) => {
      state.value = state.value - 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});
export const { increaseCounter, decreaseCounter, resetCounter } =
  cartCounter.actions;
export default cartCounter.reducer;