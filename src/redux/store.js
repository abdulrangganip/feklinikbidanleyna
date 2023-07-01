import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  data: reducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
