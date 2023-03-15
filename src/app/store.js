import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './redux/investigator/investigatorSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
  },
});

export default store;
