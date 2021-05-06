import { ActionType, createAction } from "typesafe-actions";
import { Contact } from "../../models";

export const contactActionsType = {
  SET_CURRENT_CONTACT: "SET_CURRENT_CONTACT",
};

export const setCurrentContact = createAction(
  contactActionsType.SET_CURRENT_CONTACT,
  (contact: Contact) => contact
)<Contact>();

export const ContactActions = {
  setCurrentContact,
};

export type TContactActions = ActionType<typeof ContactActions>;
