import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './investigator/investigatorSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
  },
});

export default store;
