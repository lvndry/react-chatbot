import React, { useState } from "react";

import { Message } from "../models";

interface IOwnProps {
  onSubmit: (message: Message) => any; // TODO remove any
}

interface IInputProps extends IOwnProps {}

export const Input: React.FC<IInputProps> = ({ onSubmit }) => {
  const [command, setCommand] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const message = new Message({
      content: command,
      sender: "landry",
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
    <>
      <input
        id="command-input"
        type="text"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleSubmit}>
        Send
      </button>
    </>
  );
};
