import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Routes from "./routes";

import { Bot, Contact } from "../models";
import { contactActionsType } from "../store/actions";

export const Chatbot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = [
      new Contact({ id: "0", name: "Me" }),
      new Bot({ id: "1", name: "Meme bot", command: "$" }),
      new Bot({ id: "2", name: "Pen bot", command: ">" }),
      new Bot({ id: "3", name: "Popcorn bot", command: "@" }),
    ];

    dispatch({ type: contactActionsType.SET_CONTACTS, payload: contacts });

    document.addEventListener("newMessage", ({ detail }: CustomEvent) => {
      console.log(detail);
    });
  }, []);

  return <Routes />;
};
