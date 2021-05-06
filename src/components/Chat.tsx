import React, { useCallback } from "react";
import { useDispatch, useStore } from "react-redux";

import { Input } from "./Input";

import { Message } from "../models";
import { IRootState } from "../store";
import { ChatActionsType } from "../store/actions";
import { Conversation } from "./Conversation";

export const Chat: React.FC = () => {
  const store: IRootState = useStore().getState();
  const dispatch = useDispatch();

  const onSubmit = (message: Message) =>
    dispatch({ type: ChatActionsType.ADD_MESSAGE, payload: message });

  const { conversation } = store;

  return (
    <div>
      <Conversation messages={conversation.messages} />
      <Input onSubmit={onSubmit} />
    </div>
  );
};
