import React from "react";

export const Conversation = ({ conversation }: any) => {
  console.log(conversation);
  return (
    <div>
      <ul>
        {conversation.map((message: any) => (
          <li>{message}</li>
        ))}
      </ul>
    </div>
  );
};
