import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
const rootReducer = combibeReducers({ count: countReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
