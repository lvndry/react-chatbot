import { getType } from "typesafe-actions";
import { Message } from "../../models";

import { ChatActions, TChatActions } from "../actions";

export interface IChatState {
  messages: Message[];
}

const initialState: IChatState = {
  messages: [],
};

export const chatReducer = (state = initialState, action: TChatActions) => {
  console.log(action.type);

  switch (action.type) {
    case getType(ChatActions.addMessage):
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
