import React from 'react';
import CountryInfo from '../components/country-info/CountryInfo';
import MainHeader from '../components/NavBar/MainHeader';

const DetailsPage = () => (
  <>
    <MainHeader title="Country Info" />
    <CountryInfo />
  </>
);

export default DetailsPage;
