import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = (env: any) => {
  if (env !== "production") {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
  }

  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default store(process.env.NODE_ENV);
