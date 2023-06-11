import { createSlice } from '@reduxjs/toolkit';
import { exampleBook } from '../data/exampleBook';

const book = JSON.parse(localStorage.getItem('phonebook')) || exampleBook;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: book,
  reducers: {
    add(state, action) {
      return [...state, action.payload]
    },
    remove(state, action) {
      return state.filter((user) => user.id !== action.payload)
    },
  },
})

export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
