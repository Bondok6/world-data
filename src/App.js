import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
