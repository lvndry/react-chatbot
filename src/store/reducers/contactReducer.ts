import { getType } from "typesafe-actions";

import { Contact } from "../../models";
import { ContactActions, TContactActions } from "../actions";

export interface IContactState {
  contacts: Contact[];
  currentContact: Contact;
}

const initialState: IContactState = {
  contacts: [],
  currentContact: new Contact({ id: "", name: "", avatar: "", color: "" }),
};

export const contactReducer = (
  state = initialState,
  action: TContactActions
) => {
  switch (action.type) {
    case getType(ContactActions.setContacts):
      return { ...state, contacts: action.payload };
    case getType(ContactActions.setCurrentContact):
      return { ...state, currentContact: action.payload };
    default:
      return state;
  }
};
