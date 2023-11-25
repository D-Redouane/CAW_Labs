// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Define your reusable component
const GoBackButton = () => {
  return (
    <Link to="/" className="go-back-button">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <h4>Go Back</h4>
      </button>
    </Link>
  );
};

// Export the component for use in other files
export default GoBackButton;
