import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInvestigators = createAsyncThunk('investigators/fetch', async () => {
  const investigators = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/investigators`);
  const data = await investigators.json();
  return data;
});

const initialState = {
  status: 'idle',
  value: [],
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
      });
  },
});

export default investigatorsSlice.reducer;
