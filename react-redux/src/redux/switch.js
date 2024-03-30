import { createSlice } from '@reduxjs/toolkit';

const switchColor = createSlice({
  name: 'color',
  initialState: {
    color: ['white', ','],
  },
  reducers: {
    changeTheme: (state, action) => {
      state.color.push(action.payload);
    },
  },
});

export const changeTheme = switchColor.actions;
export default switchColor.reducer;
