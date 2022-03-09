import React from 'react';
import PropTypes from 'prop-types';
import classes from './CountriesList.module.css';

const CountriesList = ({ name, flag }) => (
  <li className={classes.country}>
    <a href={name}>
      <figure>
        <img src={flag} alt="flag" />
        <figcaption>{name}</figcaption>
      </figure>
    </a>
  </li>
);

CountriesList.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountriesList;
