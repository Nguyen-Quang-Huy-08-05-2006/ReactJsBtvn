import { createSlice } from "@reduxjs/toolkit";

interface RandomState {
  number: number;
}

const initialState: RandomState = { number: 0 };

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    generate: (state) => {
      state.number = Math.floor(Math.random() * 100);
    },
  },
});

export const { generate } = randomSlice.actions;
export default randomSlice.reducer;
