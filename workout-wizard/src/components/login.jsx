import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import loginWizard from "../images/buffWizard.png";

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
      const user = userData.users.find((u) => u.email === email);

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
    <div className="form-container">
      <form className="Authform">
        <div className="form-content">
          <img
            src={loginWizard}
            alt="workout wizard img"
            className="logo-img1"
          />
          <div className="formtitle"></div>
          <div className="textcenter">
            Don't have a profile?{" "}
            <Link to="/signup" className="link-primary">
              Sign Up!
            </Link>
          </div>
          <div className="mail">
            <label>Email Address:</label>
          </div>
          <div>
            <input
              type="email"
              className="formcontrol1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label>Password:</label>
          </div>
          <div>
            <input
              type="password"
              className="formcontrol2"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button1">
            <button type="button" className="but" onClick={handleLogin}>
              Log In
            </button>
          </div>
          <p className="forgotpassword1">
            {loginError && <span className="error-message">{loginError}</span>}
            <br />
          </p>
        </div>
      </form>
    </div>
  );
}
