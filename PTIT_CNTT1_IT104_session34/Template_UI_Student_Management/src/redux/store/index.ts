import { createStore, combineReducers } from "redux";
import { studentReducer } from "../reducers/studentReducer";

const rootReducer = combineReducers({
  studentState: studentReducer,
});

const store = createStore(rootReducer);

export default store;
