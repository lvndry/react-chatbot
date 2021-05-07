import React, { useCallback } from "react";
import { useDispatch, useStore } from "react-redux";

import { Conversation } from "./Conversation";
import { Input } from "./Input";

import { Message } from "../models";
import { IRootState } from "../store/reducers";
import { ChatActionsType } from "../store/actions";

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
