import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from "@redux-devtools/extension";

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxPromise))
  );
}
