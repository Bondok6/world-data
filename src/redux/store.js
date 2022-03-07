import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countries-slice';

const store = configureStore({
  reducer: { country: countriesSlice },
});

export default store;
