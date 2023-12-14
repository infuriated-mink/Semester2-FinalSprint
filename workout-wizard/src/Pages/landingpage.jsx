import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import userData from '../data/user.json'; 

function LandingPage() {
  // useEffect will run once when the component mounts
  useEffect(() => {
    // Check if user data is not already in local storage
    if (!localStorage.getItem('userData')) {
      // Load user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Your Fitness App</h1>
    
      <div>
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-success">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
