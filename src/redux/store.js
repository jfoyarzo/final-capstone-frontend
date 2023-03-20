import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './investigator/investigatorSlice';
import appointmentsReducer from './Appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
