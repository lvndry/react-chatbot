import { ActionType, createAction } from "typesafe-actions";

const Actions = {
  INIT_CONTACTS: "INIT_CONTACTS",
};

const initContacts = createAction(
  Actions.INIT_CONTACTS,
  (contacts: any[]) => contacts
)<any>();

export const ContactActions = {
  initContacts,
};

export type TContactActions = ActionType<typeof ContactActions>;
