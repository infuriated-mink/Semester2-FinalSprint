import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");
  
    // Check if user data is available
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
  
      // Find the user based on the entered email
      const user = userData.users.find(u => u.email === email);
  
      if (user && user.password === password) {
        // Successful login
  
        // Store the current user's email in local storage
        localStorage.setItem("loggedInUserEmail", email);
  
        // After successful login, navigate to the main page
        navigate("/main");
      } else {
        // Incorrect email or password
        setLoginError("Incorrect email or password");
      }
    } else {
      // User data not found
      setLoginError("User not found");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to="/signup" className="link-primary">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            {loginError && (
              <span className="error-message">{loginError}</span>
            )}
            <br />
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
