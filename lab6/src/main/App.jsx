// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../task/TaskList';
import Task from '../task/Task';  // Import the Task component

import Main from './AppDefault';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const App = () => {
  return (
    <>
      <div className="theme-switch-container">
        <ThemeSwitchButton />
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/TaskList/:id" element={<Task />} />  {/* Dynamic index parameter */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
