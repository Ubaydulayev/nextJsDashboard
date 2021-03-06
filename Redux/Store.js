import Reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);
const dispatch = store.dispatch;
export { dispatch, store };
