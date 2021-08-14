import { createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "./reducers/countReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  countReducer: countReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
