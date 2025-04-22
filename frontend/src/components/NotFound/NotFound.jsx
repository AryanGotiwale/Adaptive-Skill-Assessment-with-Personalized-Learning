import React from 'react';
import { Link } from 'react-router-dom';  // To provide a link to navigate back to the home page

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '5rem', color: '#ff6347' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#555' }}>Oops! Page not found.</h2>
      <p style={{ fontSize: '1.2rem', color: '#777' }}>
        The page you are looking for might have been moved or doesn't exist.
      </p>
      <Link to="/" style={{ fontSize: '1.2rem', color: '#1e90ff' }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;