/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAppointments = createAsyncThunk('appointments/fetch', async () => {
  const appointments = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/appointments`);
  const data = await appointments.json();
  return data;
});

export const deleteAppointment = createAsyncThunk('appointments/delete', async (appointmentId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/appointments/${appointmentId}`);
  return appointmentId;
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
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = state.value.filter(
          (appointment) => appointment.id !== parseInt(action.payload, 10),
        );
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default appointmentsSlice.reducer;
