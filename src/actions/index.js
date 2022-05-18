import { actionTypes } from "../reducers";

export const setMessages = messages => ({
  type: actionTypes.SET_MESSAGES,
  payload: messages
});

export const addMessage = message => ({
  type: actionTypes.ADD_MESSAGE,
  payload: message
});