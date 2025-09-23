import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  mode: "list" | "grid";
}

const initialState: ViewState = { mode: "list" };

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
  },
});

export const { toggleMode } = viewSlice.actions;
export default viewSlice.reducer;
