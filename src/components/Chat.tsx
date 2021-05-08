import React from "react";
import styled from "@emotion/styled";

import { Conversation } from "./Conversation";
import { Input } from "./Input";

export const Chat: React.FC = () => {
  return (
    <ChatWrapper className="chat-container">
      <Conversation />
      <Input />
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
