import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/counter/Car/CarSlice"

export const store = configureStore({
  reducer: {
     car: carReducer,
  },
});
