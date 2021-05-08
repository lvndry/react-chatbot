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
          hoverable
          key={contact.id}
          cover={<Cover src={contact.avatar} alt={`${contact.name} avatar`} />}
        >
          <p>{contact.name}</p>
        </ContactCard>
      ))}
    </>
  );
};

const Cover = styled.img`
  height: 100px;
  object-fit: contain;
`;

const ContactCard = styled(Card)`
  margin-bottom: 8px;
  width: 160px;
  height: 150px;

  p {
    margin: auto;
    text-align: center;
  }
`;
