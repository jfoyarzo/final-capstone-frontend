/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = JSON.parse(localStorage.getItem('currentUser')) || {};
const url = 'http://localhost:3001/users';

export const getUser = createAsyncThunk('currentUser/getUser', async (user) => {
  const response = await axios.post(`${url}/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  }, { withCredentials: true });
  localStorage.setItem('currentUser', JSON.stringify(response.data.data));
  return response.data.data;
});

export const signUpUser = createAsyncThunk('currentUser/signUpUser', async (user) => {
  const response = await axios.post(url, {
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  }, { withCredentials: true });
  localStorage.setItem('currentUser', JSON.stringify(response.data.data));
  return response.data.data;
});

export const signOutUser = createAsyncThunk('currentUser/signOutUser', async () => {
  const response = await axios.delete(`${url}/sign_out`, { withCredentials: true });
  if (response.status === 200) {
    localStorage.clear();
  }
  return response.data;
});

const currentUserSlice = createSlice({
  name: 'currentUser',
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
