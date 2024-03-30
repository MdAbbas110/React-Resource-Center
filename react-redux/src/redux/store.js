import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import switchColor from './switch';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    switchBg: switchColor,
  },
});

export default store;
