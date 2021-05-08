import React from "react";

import { Message } from "../models";

interface INewMessageContext {
  handleNewMessage: (message: Message) => void;
}

const initalState: INewMessageContext = {
  handleNewMessage: (message: Message) => {},
};

export const NewMessageContext = React.createContext(initalState);
