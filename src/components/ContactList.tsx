import React from "react";
import { connect } from "react-redux";

import { IRootState } from "../store/reducers";

interface IStateProps {
  contacts: IRootState["contact"]["contacts"];
}

interface IContactListProps extends IStateProps {}

export const ContactListComponent: React.FC<IContactListProps> = ({
  contacts,
}) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: IRootState) => ({
  contacts: state.contact.contacts,
});

export const ContactList = connect<IStateProps, IRootState, {}>(
  mapStateToProps
)(ContactListComponent);
