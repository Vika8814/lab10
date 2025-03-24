import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <h1>Cinema Booking</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;