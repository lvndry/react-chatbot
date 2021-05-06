import { getType } from "typesafe-actions";

import { Contact } from "../../models";
import { ContactActions, TContactActions } from "../actions";

export interface IContactState {
  currentContact: Contact;
}

const initialState: IContactState = {
  currentContact: new Contact({ id: "", name: "" }),
};

export const contactReducer = (
  state = initialState,
  action: TContactActions
) => {
  switch (action.type) {
    case getType(ContactActions.setCurrentContact):
      return { ...state, currentContact: action.payload };
    default:
      return state;
  }
};
