import React, { useState } from "react";
import { useStore } from "react-redux";
import styled from "@emotion/styled";

import { Message } from "../models";
import { IRootState } from "../store/reducers";

interface IOwnProps {
  onSubmit: (message: Message) => { type: string; payload: Message };
}

interface IInputProps extends IOwnProps {}

export const Input: React.FC<IInputProps> = ({ onSubmit }) => {
  const state: IRootState = useStore().getState();
  const { currentContact } = state.contact;

  const [command, setCommand] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const message = new Message({
      content: command,
      sender: currentContact.name,
      date: new Date().toLocaleDateString("fr-FR"),
      type: "text",
    });

    onSubmit(message);

    const newMessageEvent = new CustomEvent<{ message: Message }>(
      "newMessage",
      { detail: { message } }
    );

    document.dispatchEvent(newMessageEvent);

    setCommand("");
  };

  return (
    <ChatInput className="chat-input">
      <CommandInput
        id="command-input"
        type="text"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SendButton type="button" onClick={handleSubmit}>
        Send
      </SendButton>
    </ChatInput>
  );
};

const ChatInput = styled.div`
  position: absolute;
  bottom: 2em;
`;

const CommandInput = styled.input``;

const SendButton = styled.button`
  margin-left: 8px;
`;
