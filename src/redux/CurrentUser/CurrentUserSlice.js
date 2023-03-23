/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = JSON.parse(sessionStorage.getItem('currentUser')) || {};
const url = 'http://localhost:3001/users';

export const getUser = createAsyncThunk('current_user/getUser', async (user) => {
  const response = await axios.post(`${url}/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  }, { withCredentials: true });
  sessionStorage.setItem('currentUser', JSON.stringify(response.data.data));
  return response.data.data;
});

export const signUpUser = createAsyncThunk('current_user/signUpUser', async (user) => {
  const response = await axios.post(url, {
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  }, { withCredentials: true });
  sessionStorage.setItem('currentUser', JSON.stringify(response.data.data));
  return response.data.data;
});

export const signOutUser = createAsyncThunk('current_user/signOutUser', async () => {
  const response = await axios.delete(`${url}/sign_out`, { withCredentials: true });
  if (response.status === 200) {
    sessionStorage.clear();
  }
  return response.data;
});

const currentUserSlice = createSlice({
  name: 'current_user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const currentUser = action.payload;
      return currentUser;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      const currentUser = { error: action.error };
      return currentUser;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      const currentUser = action.payload;
      return currentUser;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      const currentUser = { error: action.error };
      return currentUser;
    });
    builder.addCase(signOutUser.fulfilled, (state, action) => {
      const currentUser = {};
      return currentUser;
    });
  },
});

export default currentUserSlice.reducer;
