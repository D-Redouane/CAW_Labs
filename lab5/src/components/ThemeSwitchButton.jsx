// ThemeSwitchButton.jsx
import React, { useEffect, useState } from 'react';

function ThemeSwitchButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const applyTheme = () => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
  };

  return (
    <div className="theme-switch-container">
      <button className="theme-switch-button" onClick={toggleTheme}>
        <div className={`status-indicator ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? 'Dark Mode' : ''}
        </div>
        {isDarkMode ? (
          <svg className="dark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <path d="M 74.698 11.059 l -15.71 15.71 C 54.99 23.689 50.129 22 45 22 c -12.682 0 -23 10.318 -23 23 c 0 5.13 1.689 9.991 4.769 13.989 L 11.059 74.698 l 4.242 4.242 L 78.94 15.301 L 74.698 11.059 z M 28 45 c 0 -9.374 7.626 -17 17 -17 c 3.522 0 6.875 1.076 9.704 3.053 L 31.053 54.704 C 29.076 51.875 28 48.523 28 45 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) "/>
              <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) "/>
            </g>
          </svg>
        ) : (
          <svg className="light-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <path d="M 74.698 11.059 l -15.71 15.71 C 54.99 23.689 50.129 22 45 22 c -12.682 0 -23 10.318 -23 23 c 0 5.13 1.689 9.991 4.769 13.989 L 11.059 74.698 l 4.242 4.242 L 78.94 15.301 L 74.698 11.059 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) "/>
              <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) "/>
            </g>
          </svg>
        )}
        <div className={`status-indicator ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '' : 'Light Mode'}
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitchButton;
