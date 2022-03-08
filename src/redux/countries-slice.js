import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    country: '',
  },
  reducers: {
    getCountries(state, action) {
      state.countries.push(...action.payload);
    },
  },
});

export const { getCounty, getCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
