import { createSlice } from '@reduxjs/toolkit';
import { MESSAGE_LIST } from "../constants/messages";

const initialState = {
  list: MESSAGE_LIST,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list.push(action.payload);
    },
    setMessage: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { addMessage, setMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
