import React from 'react';
import PropTypes from 'prop-types';
import CountriesList from './CountriesList';
import classes from './countries.module.css';

const Countries = ({ countries }) => (
  <ul className={classes.listContainer}>
    {countries.map((country) => (
      <CountriesList
        key={country.countryName}
        name={country.countryName}
        flag={country.flag}
      />
    ))}
  </ul>
);

Countries.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default Countries;
