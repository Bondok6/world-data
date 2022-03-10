import { getCountryInfo } from './countries-slice';

const getCountryInfoFromApi = (country) => async (dispatch) => {
  // prettier-ignore
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  const data = await response.json();

  const countryInfo = [];

  data.forEach((country) => {
    countryInfo.push({
      official: country.name.official,
      capital: country.capital[0],
      region: country.region,
      timezone: country.timezones[0],
      flag: country.flags.svg,
      population: country.population,
      area: country.area,
    });
  });

  dispatch(getCountryInfo(countryInfo));
};

export default getCountryInfoFromApi;
