import { MESSAGE_LIST } from "../constants/messages";

const initialState = {
  messages: MESSAGE_LIST,
};

export const actionTypes = {
  SET_MESSAGES: "SET_MESSAGES",
  ADD_MESSAGE: "ADD_MESSAGE",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return { ...state, messages: action.payload }
    case actionTypes.ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] }
    default:
      return state
  }
};