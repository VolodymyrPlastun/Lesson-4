import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosSlice from './todosSlice';

export const store = configureStore({
  reducer: todosSlice,
});
