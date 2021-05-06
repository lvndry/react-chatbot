import { chatActions } from "../actions";

const initialState = [];

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
