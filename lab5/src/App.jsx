// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exo1 from './components/exo1/Exo1';
import Exo2 from './components/exo2/Exo2';
import Exo3 from './components/exo3/Exo3';
import Exo4 from './components/exo4/Exo4';

import Main from './AppDefault';

import ThemeSwitchButton from './components/ThemeSwitchButton';



const App = () => {
  return (
    <>
      <div className="theme-switch-container">
        <ThemeSwitchButton />
      </div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Exo1" element={<Exo1 />} />
        <Route path="/Exo2" element={<Exo2 />} />
        <Route path="/Exo3" element={<Exo3 />} />
        <Route path="/Exo4" element={<Exo4 />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;
