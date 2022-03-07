import React from 'react';
import PropTypes from 'prop-types';

const CountriesList = ({ name, flag }) => (
  <li>
    <h4>{name}</h4>
    <img src={flag} alt="flag" width="200" />
  </li>
);

CountriesList.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountriesList;
