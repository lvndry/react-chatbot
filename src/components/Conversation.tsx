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
        return message.sender.name === currentContact.name ? (
          <SentBubble key={message.id}>
            <MessageHeader>
              <Avatar
                src={message.sender.avatar}
                alt={`${message.sender.name} avatar`}
              />
              <span>
                {message.sender.name} - {message.date}
              </span>
            </MessageHeader>
            <MessageContent className="message-content">
              <p>{message.content}</p>
            </MessageContent>
          </SentBubble>
        ) : (
          <ReceivedBubble key={message.id}>
            <MessageHeader>
              <Avatar
                src={message.sender.avatar}
                alt={`${message.sender.name} avatar`}
              />
              <span>
                {message.sender.name} - {message.date}
              </span>
            </MessageHeader>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 55em;
  min-width: 20em;
  min-height: 10em;
  overflow-wrap: break-word;
  margin-bottom: 2em;

  padding: 1em 1.5em 0.5em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
`;

const MessageHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SentBubble = styled(MessageBubble)`
  background-color: #1982fc;
  float: right;
  clear: both;

  .message-content {
    margin-left: 0.5em;
  }
`;

const ReceivedBubble = styled(MessageBubble)`
  background-color: #8e8e93;

  float: left;
  clear: both;
`;

const MessageContent = styled.div`
  white-space: pre-wrap;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;
