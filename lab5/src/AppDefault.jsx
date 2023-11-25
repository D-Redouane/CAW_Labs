// App.jsx

import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './assets/App.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">This is Lab5 solution</div>

      <div className="card">
        <Link to="/exo1">
          <button>Go To Exo1</button>
        </Link>
        <Link to="/exo2">
          <button>Go To Exo2</button>
        </Link>
        <Link to="/exo3">
          <button>Go To Exo3</button>
        </Link>
        <Link to="/exo4">
          <button>Go To Exo4</button>
        </Link>
      </div>
    </>
  );
}

export default Main;
