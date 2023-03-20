import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInvestigators = createAsyncThunk('investigators/fetch', async () => {
  const investigators = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/investigators`);
  const data = await investigators.json();
  return data;
});

export const fetchInvestigator = createAsyncThunk('investigators/fetch', async (investigatorId) => {
  const investigator = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/investigators/${investigatorId}`);
  const data = await investigator.json();
  return data;
});

const initialState = {
  status: 'idle',
  value: [
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 4,
      id: 1,
    },
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 5,
      id: 2,
    },
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 3,
      id: 3,
    },
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 4,
      id: 4,
    },
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 5,
      id: 5,
    },
    {
      name: 'Dexters',
      photo: 'https://res.cloudinary.com/emmii/image/upload/v1664549397/general/unisex-avatar_ksg8nn.jpg',
      description: 'lorem ipsum',
      fee: 100,
      rating: 2,
      id: 6,
    },
  ],
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
      .addCase(fetchInvestigator.fulfilled, (state, action) => {
        const filteredState = state.value.filter((data) => data.id !== action.payload);
        const newState = { ...state, value: [...state.value, filteredState] };
        return newState;
      });
  },
});

export default investigatorsSlice.reducer;
