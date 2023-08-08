import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { chargesReducer } from "./../reducer";

const rootReducer = combineReducers({ charges: chargesReducer });
const middlewares = applyMiddleware(thunk);

export function createTestStore() {
  const store = createStore(rootReducer, {}, middlewares);
  return store;
}
