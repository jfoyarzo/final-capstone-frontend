import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../authSlice';
// import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export default rootReducer;
