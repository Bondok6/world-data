import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'country',
  initialState: {
    continent: '',
    countriesData: [],
  },
  reducers: {
    getContinent(state, action) {
      state.continent = action.payload;
    },
    getCountriesData(state, action) {
      state.getCountriesData.push(...action.payload);
    },
  },
});

export const { getContinent, getCountriesList } = countriesSlice.actions;

export default countriesSlice.reducer;
