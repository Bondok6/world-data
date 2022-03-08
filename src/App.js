import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import getCountriesFromApi from './redux/countries-action';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(getCountriesFromApi());
  }, [dispatch]);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage countries={state} />} />
          <Route path="/:countryName" element={<DetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
