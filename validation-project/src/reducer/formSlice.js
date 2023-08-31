// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    entries: []
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
    },
    addEntry: (state) => {
      const newEntry = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        message: state.message
      };
      state.entries.push(newEntry);
    }
  }
});

export const { setFirstName, setLastName, setEmail, setMessage, addEntry } = formSlice.actions;
export default formSlice.reducer;
