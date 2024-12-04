import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DealsPage from './pages/DealsPage';
import DealDetailsPage from './pages/DealDetailsPage';
import CarsPage from './pages/CarsPage';
import CarDetailsPage from './pages/CarDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/deals/:slug" element={<DealDetailsPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:slug" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;