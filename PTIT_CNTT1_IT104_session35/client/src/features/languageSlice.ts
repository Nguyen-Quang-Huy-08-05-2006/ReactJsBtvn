import { createSlice } from "@reduxjs/toolkit";

interface LangState {
  lang: "vi" | "en";
}

const initialState: LangState = { lang: "vi" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLang: (state) => {
      state.lang = state.lang === "vi" ? "en" : "vi";
    },
  },
});

export const { toggleLang } = languageSlice.actions;
export default languageSlice.reducer;
