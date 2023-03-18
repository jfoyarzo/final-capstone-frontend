/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAppointments = createAsyncThunk('appointments/fetch', async () => {
  const appointments = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/appointments`);
  const data = await appointments.json();
  return data;
});

const initialState = {
  status: 'idle',
  value: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    loadAppointments: (state, action) => {
      const newState = { ...state, value: [...state.value, action.payload] };
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchAppointments.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      });
  },
});

export default appointmentsSlice.reducer;
