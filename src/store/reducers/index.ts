import { combineReducers } from "redux";

import { chatReducer, IChatState } from "./chatReducer";
import { contactReducer, IContactState } from "./contactReducer";

export interface IRootState {
  conversation: IChatState;
  contact: IContactState;
}

export default combineReducers({
  conversation: chatReducer,
  contact: contactReducer,
});
