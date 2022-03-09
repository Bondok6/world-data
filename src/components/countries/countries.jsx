import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountriesList from './CountriesList';
import classes from './countries.module.css';

const Countries = ({ countries }) => {
  const [input, setInput] = useState('');

  const filteredData = countries.filter((country) => {
    const data = Object.keys(country).some((key) => {
      const res = country[key].toLowerCase().includes(input.toLowerCase());
      return res;
    });
    return data;
  });

  return (
    <section>
      <input
        type="search"
        className={classes.search}
        placeholder="Search by country name .."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />

      <ul className={classes.listContainer}>
        {filteredData.map((country) => (
          <CountriesList
            key={country.countryName}
            name={country.countryName}
            flag={country.flag}
          />
        ))}
      </ul>
    </section>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default Countries;
