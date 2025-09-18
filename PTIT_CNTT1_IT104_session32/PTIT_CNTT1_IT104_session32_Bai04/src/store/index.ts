import { createStore, combineReducers } from "redux";
import randomReducer from "./randomReducer";

const rootReducer = combineReducers({
  random: randomReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
