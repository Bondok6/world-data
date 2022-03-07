import React from 'react';
import { useDispatch } from 'react-redux';
import { getContinent } from '../../redux/countriesSllice';

const Continents = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          Africa
          <button
            type="button"
            onClick={() => dispatch(getContinent('Africa'))}
          >
            click
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Continents;
