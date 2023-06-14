import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterIn(state, action) {return state = action.payload}
  }
})
export const { filterIn } = filterSlice.actions;
export default filterSlice.reducer;