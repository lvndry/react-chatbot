import { ActionType, createAction, action } from "typesafe-actions";
import { Message } from "../../models";

export const ChatActionsType = {
  ADD_MESSAGE: "chat/ADD_MESSAGE",
};

export const addMessage = createAction(
  ChatActionsType.ADD_MESSAGE,
  (message: Message) => message
)<Message>();

export const ChatActions = {
  addMessage,
};

export type TChatActions = ActionType<typeof ChatActions>;
