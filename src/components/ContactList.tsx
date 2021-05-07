import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import styled from "@emotion/styled";

import { IRootState } from "../store/reducers";

export const ContactList: React.FC = () => {
  const contacts = useSelector((state: IRootState) => state.contact.contacts);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          hoverable
          style={{ height: 150 }}
          cover={
            <img
              src={contact.avatar}
              alt={`${contact.name} avatar`}
              height={100}
            />
          }
        >
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
