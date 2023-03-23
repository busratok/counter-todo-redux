import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

//Reducers are combined
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});
// Store is created
export const store = createStore(rootReducer);
