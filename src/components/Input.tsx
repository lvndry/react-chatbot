import React, { useState, useEffect } from "react";
import { PayloadAction } from "typesafe-actions";
import { Message } from "../models";

interface IOwnProps {
  onSubmit: (message: Message) => any; // TODO remove any
}

interface IInputProps extends IOwnProps {}

export const Input: React.FC<IInputProps> = ({ onSubmit }) => {
  const [command, setCommand] = useState("");

  const handleSubmit = () => {
    const message = new Message({
      content: command,
      sender: "landry",
      date: new Date().toLocaleDateString("fr-FR"),
    });

    onSubmit(message);
    setCommand("");
  };

  return (
    <>
      <input
        type="text"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
      />
      <button type="button" onClick={() => handleSubmit()}>
        Send
      </button>
    </>
  );
};
