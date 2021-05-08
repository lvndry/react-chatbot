import React, { ChangeEvent, useState } from "react";
import { useStore } from "react-redux";
import styled from "@emotion/styled";
import { Input as AntdInput, Button } from "antd";

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
      sender: currentContact,
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
  bottom: 2em;
  display: inline-flex;
`;

const CommandInput = styled(AntdInput)``;

const SendButton = styled(Button)`
  margin-left: 8px;
  height: auto;
`;
