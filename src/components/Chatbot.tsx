import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Routes from "./routes";

import { Bot, Contact, Message } from "../models";
import { ChatActionsType, contactActionsType } from "../store/actions";

export const Chatbot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contacts = [
      new Contact({ id: "0", name: "lvndry" }),
      new Bot({ id: "1", name: "Nice bot", prefix: "$" }),
      new Bot({ id: "2", name: "Pen bot", prefix: ">" }),
      new Bot({ id: "3", name: "News bot", prefix: "@" }),
    ];

    dispatch({ type: contactActionsType.SET_CONTACTS, payload: contacts });
    dispatch({
      type: contactActionsType.SET_CURRENT_CONTACT,
      payload: contacts.find((contact) => contact.id === "0"),
    });

    document.addEventListener(
      "newMessage",
      ({ detail }: CustomEvent<{ message: Message }>) => {
        console.log(detail);
        contacts.map(async (contact) => {
          if (contact instanceof Bot) {
            const message = await contact.parseCommand(detail.message.content);
            if (message) {
              dispatch({ type: ChatActionsType.ADD_MESSAGE, payload: message });
            }
          }
        });
      }
    );
  }, []);

  return <Routes />;
};
