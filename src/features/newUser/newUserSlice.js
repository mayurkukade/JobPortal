import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewUser: true,
};

export const newUserSlice = createSlice({
  name: "newUserSlice",
  initialState,
  reducers: {
    showNewUserMessage: (state) => {
      state.isNewUser = false;
    },
  },
});

export const { showNewUserMessage } = newUserSlice.actions;

export default newUserSlice.reducer;
