import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteInvestigator = createAsyncThunk('investigators/delete', async (investigatorId) => {
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/${investigatorId}`, { withCredentials: true });
  return response.data;
});

const initialState = {
  value: [],
  status: 'idle',
};

const deleteInvestigatorSlice = createSlice({
  name: 'investigatorsDelete',
  initialState,
  reducers: {
    loadInvestigator: (state, action) => {
      const newState = { ...state, value: [...state.value, action.payload] };
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(deleteInvestigator.pending, (state) => {
        const newState = { ...state, status: 'loading' };
        return newState;
      })
      .addCase(deleteInvestigator.rejected, (state, action) => {
        const newState = { ...state, status: 'failed', error: action.error.message };
        return newState;
      })
      .addCase(deleteInvestigator.fulfilled, (state, action) => {
        const newState = { ...state, status: 'fullfilled', message: action.payload };
        return newState;
      });
  },
});

export default deleteInvestigatorSlice.reducer;
