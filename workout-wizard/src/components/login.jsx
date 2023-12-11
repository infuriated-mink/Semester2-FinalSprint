import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Navigate to the main page after successful login
      navigate("/main");
    } else {
      // Handle login error
      setLoginError("Incorrect email or password");
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
