import { createStore, combineReducers } from "redux";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  company: companyReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
