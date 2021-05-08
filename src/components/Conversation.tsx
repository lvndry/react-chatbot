import React, { useEffect } from "react";
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

  useEffect(() => {
    const conversationbox = document.getElementById("conversation-container");
    conversationbox.scrollTo({
      top: conversationbox.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Container id="conversation-container">
      {messages.map((message: Message, index) => {
        return message.sender === currentContact.name ? (
          <SentBubble key={message.id}>
            <span>
              {message.sender} - {message.date}
            </span>
            <MessageContent>
              <p>{message.content}</p>
            </MessageContent>
          </SentBubble>
        ) : (
          <ReceivedBubble key={message.id}>
            <span>
              {message.sender} - {message.date}
            </span>
            <MessageContent>
              {message.type === "image" ? (
                <img
                  alt="image bot"
                  src={message.content}
                  width={300}
                  height={300}
                />
              ) : (
                <p>{message.content}</p>
              )}
            </MessageContent>
          </ReceivedBubble>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
  max-height: 85%;
  height: calc(100vh - 127px);
  padding: 16px;
`;

const MessageBubble = styled.div`
  position: relative;
  width: fit-content;
  max-width: 55em;
  overflow-wrap: break-word;
  margin-bottom: 2em;

  padding: 1em 1.5em 0.5em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
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

const MessageContent = styled.div`
  white-space: pre-wrap;
`;
