import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { chargesReducer } from "@/components/charges/reducer";

const rootReducer = combineReducers({ charges: chargesReducer });
const middlewares = applyMiddleware(thunk);

export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, composeWithDevTools(middlewares));
