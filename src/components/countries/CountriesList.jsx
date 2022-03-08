import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountriesList = ({ name, flag }) => (
  <li className="country">
    <Link to="ظ">
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
