import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const url = 'http://localhost:3001/users';

export const getUser = createAsyncThunk('currentUser/getUser', async (user) => {
  const response = await axios.post(`${url}/sign_in`, {
    user: {
      email: user.email,
      password: user.password,
    },
  }, { withCredentials: true });
  console.log(response);
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
  console.log(response);
  return response.data.data;
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
      console.log(action.error);
    });
  },
});

export default currentUserSlice.reducer;
