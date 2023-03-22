/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createInvestigator = createAsyncThunk('investigator/create', async (investigator) => {
  const newAppointment = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/`, investigator);
  const data = await newAppointment.json();
  return data.data;
});

const initialState = {
  status: 'idle',
  value: [],
  detail: {},
};

const addInvestigatorsSlice = createSlice({
  name: 'addInvestigators',
  initialState,
  reducers: {
    loadInvestigators: (state, action) => {
      const newState = { ...state, value: [...state.value, action.payload] };
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createInvestigator.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = [...state.value, action.payload];
      });
  },
});

export default addInvestigatorsSlice.reducer;
