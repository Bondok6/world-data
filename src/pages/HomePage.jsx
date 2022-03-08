import React from 'react';
import PropTypes from 'prop-types';
import Countries from '../components/countries/Countries';

const HomePage = ({ countries }) => <Countries countries={countries} />;

HomePage.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default HomePage;
