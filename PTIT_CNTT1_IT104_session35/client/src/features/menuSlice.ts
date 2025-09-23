import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  active: string;
}

const initialState: MenuState = { active: "home" };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;
export default menuSlice.reducer;
