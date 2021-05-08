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
  position: relative;
  height: 89vh;
  margin: auto;
  padding: 18px 18px;
  background: #e29494;
  opacity: 0.9;
  border-radius: 8px;
`;
