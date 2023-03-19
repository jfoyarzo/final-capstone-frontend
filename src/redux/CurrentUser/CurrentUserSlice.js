import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const url = 'http://localhost:3001/users/sign_in';

export const getUser = createAsyncThunk('currentUser/getUser', async (user) => {
  const response = await axios.post(url, {
    user: {
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
      console.log(action.error);
    });
  },
});

export default currentUserSlice.reducer;
