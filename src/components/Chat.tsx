import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { Conversation } from "./Conversation";
import { Input } from "./Input";

import { Message } from "../models";
import { addMessage } from "../store/actions";

export const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (message: Message) => dispatch(addMessage(message));

  return (
    <ChatWrapper className="chat-container">
      <Conversation />
      <Input onSubmit={handleSubmit} />
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  height: 100%;
  margin: auto;
  padding: 18px 18px;
  background: #ebebeb;
  position: relative;
  border-radius: 8px;
`;
