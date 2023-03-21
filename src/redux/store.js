import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './investigators/investigatorSlice';
import appointmentsReducer from './Appointments/appointmentsSlice';
import userReducer from './CurrentUser/CurrentUserSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
    appointments: appointmentsReducer,
    userReducer,
  },
});

export default store;
