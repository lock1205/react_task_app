import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
  //5.스토어에 slide 등록
  reducer: {
    auth: authReducer,
  },
});

export default store;
