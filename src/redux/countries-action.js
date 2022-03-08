import { getCountries } from './countries-slice';

const getCountriesFromApi = () => async (dispatch) => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  const countriesData = [];

  data.forEach((country) => {
    countriesData.push({
      countryName: country.name.common,
      area: country.area,
      flag: country.flags.svg,
      population: country.population,
    });
  });

  dispatch(getCountries(countriesData));
};

export default getCountriesFromApi;
