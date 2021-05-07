import React from "react";
import { useSelector, useStore } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { Message } from "../models";
import { IRootState } from "../store/reducers";
import styled from "@emotion/styled";

export const Conversation: React.FC = () => {
  const state: IRootState = useStore().getState();
  const { currentContact } = state.contact;
  const messages = useSelector(
    (state: IRootState) => state.conversation.messages
  );

  return (
    <InfiniteScroll pageStart={0} hasMore={false} loadMore={() => {}}>
      {messages.map((message: Message, index) => {
        return message.sender === currentContact.name ? (
          <div>
            <SentBubble key={index.toString()}>
              {message.sender} - {message.content} - {message.date}
            </SentBubble>
          </div>
        ) : (
          <div>
            <ReceivedBubble key={index.toString()}>
              {message.sender} - {message.content} - {message.date}
            </ReceivedBubble>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

const MessageBubble = styled.p`
  position: relative;
  max-width: 30em;

  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    // layout
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

const SentBubble = styled(MessageBubble)`
  background-color: #1982fc;
  float: right;
  clear: left;

  &::before {
    left: 1.5em;
    border-bottom-color: #1982fc;
  }
`;

const ReceivedBubble = styled(MessageBubble)`
  background-color: #8e8e93;

  float: left;
  clear: right;

  &::before {
    left: 27em;
    border-bottom-color: #8e8e93;
  }
`;
