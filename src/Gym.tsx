import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Guide from './Guide';
import Offers from "./Offers"

const Gym: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Offers" element={<Offers />} />
      </Routes>
    </Router>
  );
};

export default Gym;