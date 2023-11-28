import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import Cookies from "js-cookie";
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
       loginSuccess:(state,action)=>{
        state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
  Cookies.set('cookie',state.token.data)

       },
       logoutSuccess: (state) => {
         state.isAuthenticated = false;
         state.user = null;
         state.token = null;
         Cookies.remove("cookie")
       },
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;