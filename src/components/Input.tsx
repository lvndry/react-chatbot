import React, { ChangeEvent, useState, useContext } from "react";
import { useStore } from "react-redux";
import styled from "@emotion/styled";
import { Input as AntdInput, Button } from "antd";

import { Message } from "../models";
import { IRootState } from "../store/reducers";
import { NewMessageContext } from "../context/newMessageContext";

export const Input: React.FC = () => {
  const state: IRootState = useStore().getState();
  const { currentContact } = state.contact;
  const newMessageContext = useContext(NewMessageContext);

  const [command, setCommand] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const message = new Message({
      content: command,
      sender: currentContact,
    });

    newMessageContext.handleNewMessage(message);

    setCommand("");
  };

  return (
    <ChatInput className="chat-input">
      <CommandInput
        autoFocus
        id="command-input"
        type="text"
        value={command}
        placeholder="help"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCommand(event.target.value)
        }
        onKeyPress={handleKeyPress}
        size="large"
      />
      <SendButton onClick={handleSubmit}>Send</SendButton>
    </ChatInput>
  );
};

const ChatInput = styled.div`
  position: absolute;
  display: inline-flex;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 16px;
  justify-content: space-between;
`;

const CommandInput = styled(AntdInput)``;

const SendButton = styled(Button)`
  margin-left: 8px;
  height: auto;
  border-radius: 4px;
  background-color: cornflowerblue;
`;
