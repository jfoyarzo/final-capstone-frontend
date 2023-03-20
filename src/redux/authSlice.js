/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  isAdmin: false,
  // other auth-related state properties
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      // perform login logic here, e.g. make an API call to authenticate the user
      // if the user is authenticated and is an admin, set the isAdmin state property to true
      if (username === 'admin' && password === 'admin') {
        state.isAuthenticated = true;
        state.user = { username };
        state.isAdmin = true;
      } else {
        state.isAuthenticated = true;
        state.user = { username };
        state.isAdmin = false;
      }
    },
    logout(state) {
      // handle logout logic here, e.g. clear the user and isAdmin state properties
      state.isAuthenticated = false;
      state.user = null;
      state.isAdmin = false;
    },
    // other auth-related reducers
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
