import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Exercise1 } from './pages/Exercise1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise1" element={<Exercise1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
