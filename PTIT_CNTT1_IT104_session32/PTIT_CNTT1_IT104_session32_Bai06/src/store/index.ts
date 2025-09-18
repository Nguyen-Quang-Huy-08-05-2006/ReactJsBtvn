import { createStore, combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
