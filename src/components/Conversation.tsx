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
      {messages.map((message: Message) => {
        return message.sender.name === currentContact.name ? (
          <SentBubble color={message.sender.color} key={message.id}>
            <MessageHeader className="message-header">
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
          <ReceivedBubble color={message.sender.color} key={message.id}>
            <MessageHeader className="message-header">
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
                <MessageImage src={message.content} alt="image bot" />
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
  max-height: 90%;
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

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  animation: scaleIn 0.5s ease-in-out;
`;

const MessageHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const SentBubble = styled(MessageBubble)`
  background-color: ${(props) => props.color};
  float: right;
  clear: both;

  .message-content {
    margin-left: 0.5em;
  }

  transform-origin: bottom right 0;
`;

const ReceivedBubble = styled(MessageBubble)`
  background-color: ${(props) => props.color};

  float: left;
  clear: both;

  .message-header {
    margin-bottom: 1em;
  }

  transform-origin: bottom left 0;
`;

const MessageContent = styled.div`
  white-space: pre-wrap;
`;

const MessageImage = styled.img`
  margin-bottom: 1em;
  width: 300px;
  height: 300px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
