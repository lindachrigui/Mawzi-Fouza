import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Guide from "./Guide";
import Offers from "./Offers";
import MiniShop from "./MiniShop";

const Gym: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/MiniShop" element={<MiniShop />} />
      </Routes>
    </Router>
  );
};

export default Gym;
