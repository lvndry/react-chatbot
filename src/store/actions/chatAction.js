export const chatActions = {
  ADD_MESSAGE: "ADD_MESSAGE",
};

export const addMessage = (message) => ({
  type: chatActions.ADD_MESSAGE,
  payload: message,
});
