import { combineReducers } from "redux";

import { chatReducer } from "./chatReducer";

export { IChatState } from "./chatReducer";

export default combineReducers({
  conversation: chatReducer,
});
