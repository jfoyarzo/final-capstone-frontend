import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './CurrentUser/CurrentUserSlice';
import investigatorsReducer from './investigator/investigatorSlice';
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
