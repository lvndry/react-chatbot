import React from "react";
import styled from "@emotion/styled";

import { Chat } from "./Chat";
import { ContactList } from "./ContactList";

export const Home = () => {
  return (
    <Main>
      <ChatArticle>
        <Chat />
      </ChatArticle>
      <ContactListArticle>
        <ContactList />
      </ContactListArticle>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  height: 80%;
  width: auto;
  padding: 20px;
`;

const ChatArticle = styled.article`
  width: 85%;
`;

const ContactListArticle = styled.article`
  margin-left: 3em;
`;
