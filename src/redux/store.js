import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countriesSllice';

const store = configureStore({
  reducer: { country: countriesSlice },
});

export default store;
