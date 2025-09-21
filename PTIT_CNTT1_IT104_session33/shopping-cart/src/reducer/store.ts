import { createStore, combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product:productReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
