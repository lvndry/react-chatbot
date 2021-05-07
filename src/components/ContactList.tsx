import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";

import { IRootState } from "../store/reducers";
import styled from "@emotion/styled";

export const ContactList: React.FC = () => {
  const contacts = useSelector((state: IRootState) => state.contact.contacts);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard>
          <p>{contact.name}</p>
        </ContactCard>
      ))}
    </>
  );
};

const ContactCard = styled(Card)`
  margin-bottom: 8px;
  width: 160px;

  p {
    margin: auto;
    text-align: center;
  }
`;
