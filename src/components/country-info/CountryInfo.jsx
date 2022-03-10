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
  }, [countryName, dispatch]);

  return (
    <>
      {state.length > 0 && (
        <section className={classes.detailsSection}>
          <div className={classes.detailsTop}>
            <img src={state[0].flag} alt="flag" />
            <div>
              <h2>{countryName}</h2>
              <h4>{state[0].region}</h4>
            </div>
          </div>
          <ul className={classes.detailsBottom}>
            <li>
              <span> 🎌 Official Name: </span>
              <span>{state[0].official}</span>
            </li>
            <li>
              <span> 🌆 Capital: </span>
              <span>{state[0].capital}</span>
            </li>
            <li>
              <span> ⭕ Area: </span>
              <span>
                {+state[0].area}
                &nbsp; km2
              </span>
            </li>
            <li>
              <span>🤼 Population: </span>
              <span>
                {(+state[0].population / 1000000).toFixed(1)}
                &nbsp; million
              </span>
            </li>
            <li>
              <span>⏳ Time Zone: </span>
              <span>{state[0].timezone}</span>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CountryInfo;
