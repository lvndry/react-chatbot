import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Chatbot } from "./components/Chatbot";

import store from "./store";

import "./style.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Chatbot />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
