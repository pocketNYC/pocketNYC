import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/users/userSlice'
const store = configureStore({
  reducer: { 
    auth: authReducer,
    user: userReducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
