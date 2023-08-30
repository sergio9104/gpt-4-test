import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from '../reducer';

export const store = configureStore({
  reducer: {
    form: formSlice
  }
});