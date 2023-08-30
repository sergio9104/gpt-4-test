// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    }
  }
});

export const { setFirstName, setLastName, setEmail, setMessage } = formSlice.actions;
export default formSlice.reducer;
