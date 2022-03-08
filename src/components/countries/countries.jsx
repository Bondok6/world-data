import React from 'react';
import PropTypes from 'prop-types';
import CountriesList from './CountriesList';

const Countries = ({ countries }) => {
  console.log(countries);
  return (
    <ul className="list-container">
      {countries.map((country) => (
        <CountriesList
          key={country.countryName}
          name={country.countryName}
          flag={country.flag}
        />
      ))}
    </ul>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default Countries;
