import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'key name',
  initialState: {
    items: ['apple', 'banana'],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      //states here can be directly modified no need to return or anything
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//? cartSlice will return two things actions and reducer

//it will help in passing the action to this reducer
export const { addItems, removeItem, clearCart } = cartSlice.actions;
//it will combine all the reducers and make on and export it
export default cartSlice.reducer;
