import { configureStore } from '@reduxjs/toolkit';
import investigatorsReducer from './investigators/investigatorSlice';
import appointmentsReducer from './Appointments/appointmentsSlice';
import userReducer from './CurrentUser/CurrentUserSlice';
import createInvestigatorsReducer from './InvestigatorForm/investigatorFormSlice';
import deleteInvestigatorSlice from './DeleteInvestigator/deleteInvestigatorSlice';

const store = configureStore({
  reducer: {
    investigators: investigatorsReducer,
    appointments: appointmentsReducer,
    createInvestigatorsReducer,
    deleteInvestigatorSlice,
    userReducer,
  },
});

export default store;
