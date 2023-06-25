import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Baccarat from './components/pages/Baccarat';
import Roulette from './components/pages/Roulette';
import BlackJack from './components/pages/BlackJack';
import Craps from './components/pages/Craps';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on component mount
  }, [location]);

  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Roulette"  element={<Roulette />} />
        <Route path="/Craps"  element={<Craps />} />
        <Route path="/BlackJack"  element={<BlackJack />} />
        <Route path="/Baccarat"  element={<Baccarat />} />
      </Routes>
    </div>
  </>)
}

export default App;
