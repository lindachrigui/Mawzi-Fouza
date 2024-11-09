import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Guide from './Guide';

const Gym: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Guide" element={<Guide />} />
      </Routes>
    </Router>
  );
};

export default Gym;