import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import randomReducer from "./features/randomSlice";
import languageReducer from "./features/languageSlice";
import viewReducer from "./features/viewSlice";
import menuReducer from "./features/menuSlice";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    random: randomReducer,
    language: languageReducer,
    view: viewReducer,
    menu: menuReducer,
    counter: counterReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
