import { createSlice } from '@reduxjs/toolkit';
import { exampleBook } from '../../data/exampleBook';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: exampleBook,
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
