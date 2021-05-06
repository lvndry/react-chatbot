import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch } from "react-redux";

import store from "./store";

import "./style.scss";

import Routes from "./routes";
import { Contact, Bot } from "./models";
import { contactActionsType } from "./store/actions";

const Chatbot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = [
      new Contact({ id: "0", name: "Me" }),
      new Bot({ id: "1", name: "Meme bot", command: "$" }),
      new Bot({ id: "2", name: "Pen bot", command: ">" }),
      new Bot({ id: "3", name: "Popcorn bot", command: "@" }),
    ];

    dispatch({ type: contactActionsType.SET_CONTACTS, payload: contacts });
  }, []);

  return <Routes />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Chatbot />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
