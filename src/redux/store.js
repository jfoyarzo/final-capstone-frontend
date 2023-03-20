import { configureStore } from '@reduxjs/toolkit';
import userReducer from './CurrentUser/CurrentUserSlice';

const store = configureStore({
  reducer: { userReducer },
});

export default store;
