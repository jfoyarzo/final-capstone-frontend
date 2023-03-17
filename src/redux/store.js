import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import investigatorsReducer from './redux/investigator/investigatorSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
  },
});

export default store;
