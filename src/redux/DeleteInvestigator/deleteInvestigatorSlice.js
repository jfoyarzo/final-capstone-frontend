import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteInvestigator = createAsyncThunk('investigators/delete', async (investigatorId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/v1/investigators/${investigatorId}`);
  return investigatorId;
});

const initialState = {
  value: [],
  status: 'idle',
};

const deleteInvestigatorSlice = createSlice({
  name: 'investigators/delete',
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
        state.status = 'loading';
      })
      .addCase(deleteInvestigator.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteInvestigator.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = state.value.filter(
          (investigator) => investigator.id !== parseInt(action.payload, 10),
        );
      });
  },
});

export default deleteInvestigatorSlice.reducer;
