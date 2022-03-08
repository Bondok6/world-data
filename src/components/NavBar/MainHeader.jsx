import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mic from '../../images/mic-icon.svg';
import settings from '../../images/settings-icon.svg';
import leftArrow from '../../images/left-arrow.svg';
import classes from './MainHeader.module.css';

const MainHeader = ({ title }) => (
  <header>
    <nav className={classes.nav}>
      {title === 'Country Info' ? (
        <div>
          <Link to="/">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
        </div>
      ) : null}
      <div>{title}</div>
      <div>
        <img src={mic} alt="mic-icon" />
        <img src={settings} alt="settings-icon" />
      </div>
    </nav>
  </header>
);

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
