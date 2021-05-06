import React, { useState, useEffect } from "react";

export const Input = () => {
  const [command, setCommand] = useState("");

  useEffect(() => {
    console.log(command);
  }, [command]);

  return (
    <>
      <input
        type="text"
        value={command}
        onChange={(event) => setCommand(event.target.value)}
      />
      <button type="button"> Send </button>
    </>
  );
};
