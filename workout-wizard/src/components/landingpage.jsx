import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Your Fitness App</h1>
      
      {/* Add Login and Signup buttons with Link components */}
      <div>
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-success">Signup</button>
        </Link>
      </div>
      
      {/* Other content for your landing page */}
    </div>
  );
}

export default LandingPage;
