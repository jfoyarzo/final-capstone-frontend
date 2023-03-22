/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createInvestigator = createAsyncThunk('investigators/create', async (investigator) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/`, {
    investigator: {
      name: investigator.name,
      photo: investigator.photo,
      description: investigator.description,
      fee: investigator.fee,
      rating: investigator.rating,
    },
  }, { withCredentials: true });
  return response.data;
});

const initialState = {
  status: 'idle',
  value: [],
};

const createInvestigatorsSlice = createSlice({
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
      .addCase(createInvestigator.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = [...state.value, action.payload];
      });
  },
});

export default createInvestigatorsSlice.reducer;
