import React from "react";
import styled from "@emotion/styled";

import { Chat } from "./Chat";
import { ContactList } from "./ContactList";

export const Home = () => {
  return (
    <>
      <Title>React Chatbot</Title>
      <Main>
        <ChatArticle>
          <Chat />
        </ChatArticle>
        <ContactListArticle>
          <ContactList />
        </ContactListArticle>
      </Main>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  width: auto;
`;

const ChatArticle = styled.article`
  width: 85%;
`;

const ContactListArticle = styled.article`
  margin-left: 3em;
`;
