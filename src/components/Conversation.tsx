import React from "react";
import { connect } from "react-redux";

import { Message } from "../models";
import { IRootState } from "../store";

interface IOwnProps {
  messages: Message[];
}

interface IConversationProps extends IOwnProps {}

export const ConversationComponent: React.FC<IConversationProps> = ({
  messages,
}: IConversationProps) => {
  return (
    <div>
      <ul>
        {messages.map((message: Message) => (
          <li key={message.content}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  messages: state.conversation.messages,
});

export const Conversation = connect<{}, IRootState, IOwnProps>(
  mapStateToProps,
  null
)(ConversationComponent);
