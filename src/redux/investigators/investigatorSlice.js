/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInvestigators = createAsyncThunk('investigators/fetchInvestigators', async () => {
  const response = await axios(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/`, { withCredentials: true });
  return response.data;
});

export const fetchInvestigator = createAsyncThunk('investigators/fetchInvestigator', async (investigatorId) => {
  const response = await axios(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/${investigatorId}`, { withCredentials: true });
  return response.data;
});

const initialState = {
  status: 'idle',
  value: [],
  detail: {},
};

const investigatorsSlice = createSlice({
  name: 'investigators',
  initialState,
  reducers: {
    loadInvestigators: (state, action) => {
      const newState = { ...state, value: [...state.value, action.payload] };
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchInvestigators.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchInvestigators.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      })
      .addCase(fetchInvestigators.fulfilled, (state, action) => {
        const newState = { ...state, value: action.payload };
        return newState;
      })
      .addCase(fetchInvestigator.fulfilled, (state, action) => {
        const newState = { ...state, detail: action.payload };
        return newState;
      });
  },
});

export default investigatorsSlice.reducer;
