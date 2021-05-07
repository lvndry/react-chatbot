import React from "react";
import { useSelector, useStore } from "react-redux";
import styled from "@emotion/styled";

import { Message } from "../models";
import { IRootState } from "../store/reducers";

export const Conversation: React.FC = () => {
  const state: IRootState = useStore().getState();
  const { currentContact } = state.contact;
  const messages = useSelector(
    (state: IRootState) => state.conversation.messages
  );

  return (
    <Container>
      {messages.map((message: Message, index) => {
        return message.sender === currentContact.name ? (
          <SentBubble key={index}>
            {message.sender} - {message.date}
            <MessageContent>{message.content}</MessageContent>
          </SentBubble>
        ) : (
          <ReceivedBubble key={index}>
            {message.sender} - {message.date}
            <MessageContent>{message.content}</MessageContent>
          </ReceivedBubble>
        );
      })}
    </Container>
  );
};

const MessageBubble = styled.p`
  position: relative;
  width: fit-content;
  max-width: 55em;
  overflow-wrap: break-word;
  margin-bottom: 2em;

  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  overflow: auto;
  max-height: 85%;
  padding: 8px 16px;
`;

const SentBubble = styled(MessageBubble)`
  background-color: #1982fc;
  float: right;
  clear: both;
`;

const ReceivedBubble = styled(MessageBubble)`
  background-color: #8e8e93;

  float: left;
  clear: both;
`;

const MessageContent = styled.span`
  white-space: pre;
`;
