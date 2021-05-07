import React from "react";
import { connect } from "react-redux";

import { Message } from "../models";
import { IRootState } from "../store/reducers";

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
        {messages.map((message: Message, index) => (
          <li key={index.toString()}>
            {message.sender} - {message.content} - {message.date}
          </li>
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
