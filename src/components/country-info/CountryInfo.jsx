import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCountryInfoFromApi from '../../redux/country-info';
import classes from './CountryInfo.module.css';

const CountryInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.country.countryInfo);

  const { countryName } = params;

  useEffect(() => {
    dispatch(getCountryInfoFromApi(countryName));
  }, []);

  return (
    <>
      {state.length && (
        <section className={classes.detailsSection}>
          <div className={classes.detailsTop}>
            <img src={state[0].flag} alt="flag" />
            <h2>{countryName}</h2>
          </div>
          <ul className={classes.detailsBottom}>
            <li>{state[0].area}</li>
            <li>{state[0].population}</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CountryInfo;
