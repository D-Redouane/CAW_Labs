import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import '../assets/App.css';
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
      <br></br>
      <h1>Vite + React</h1>
      <br></br>
      <div>This is Lab6 solution</div>
      <br></br>
      <div>
        <Link to="/TaskList">
          <button>Go To TaskList</button>
        </Link>
      </div>
    </>
  );
}

export default Main;
