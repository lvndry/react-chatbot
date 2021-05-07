import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { Conversation } from "./Conversation";
import { Input } from "./Input";

import { Message } from "../models";
import { ChatActionsType } from "../store/actions";

export const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (message: Message) =>
    dispatch({ type: ChatActionsType.ADD_MESSAGE, payload: message });

  return (
    <ChatWrapper>
      <Conversation />
      <Input onSubmit={onSubmit} />
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  height: 80%;
  margin: auto;
  padding: 18px 18px;
  background: #ebebeb;
  position: relative;
  border-radius: 8px;
`;
