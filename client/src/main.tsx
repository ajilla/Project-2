import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Weather from './pages/Weather';
import Favorites from './pages/Favorites';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weather/:city" element={<Weather />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </React.StrictMode>
);