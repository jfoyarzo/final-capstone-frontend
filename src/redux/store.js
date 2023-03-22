import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './investigators/investigatorSlice';
import appointmentsReducer from './Appointments/appointmentsSlice';
import userReducer from './CurrentUser/CurrentUserSlice';
import createInvestigatorsReducer from './InvestigatorForm/investigatorFormSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
    appointments: appointmentsReducer,
    createInvestigatorsReducer,
    userReducer,
  },
});

export default store;
