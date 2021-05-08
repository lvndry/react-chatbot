import { ActionType, createAction } from "typesafe-actions";

import { Contact } from "../../models";

export const contactActionsType = {
  SET_CONTACTS: "contacts/SET_CONTACTS",
  SET_CURRENT_CONTACT: "contacts/SET_CURRENT_CONTACT",
};

export const setContacts = createAction(
  contactActionsType.SET_CONTACTS,
  (contacts: Contact[]) => contacts
)<Contact[]>();

export const setCurrentContact = createAction(
  contactActionsType.SET_CURRENT_CONTACT,
  (contact: Contact) => contact
)<Contact>();

export const ContactActions = {
  setContacts,
  setCurrentContact,
};

export type TContactActions = ActionType<typeof ContactActions>;
