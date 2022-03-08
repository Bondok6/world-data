import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './CountriesList.module.css';

const CountriesList = ({ name, flag }) => (
  <li className={classes.country}>
    <Link to={name}>
      <figure>
        <img src={flag} alt="flag" />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  </li>
);

CountriesList.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountriesList;
