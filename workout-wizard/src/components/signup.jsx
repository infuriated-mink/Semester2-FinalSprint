import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import signupWizard from "../images/SignUpWizard.png";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Load existing user data from userData in local storage
    const existingUserData = localStorage.getItem("userData");
    let userData = existingUserData
      ? JSON.parse(existingUserData)
      : { users: [] };

    // Check if the email already exists
    const existingUser = userData.users.find((user) => user.email === email);

    if (existingUser) {
      // Email already exists, handle accordingly (show error, etc.)
      console.log("Email already exists");
    } else {
      // Email does not exist, add new user
      const newUser = {
        fullName,
        email,
        password,
      };

      // Add the new user to the users array
      userData.users.push(newUser);

      // Save updated user data to local storage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Navigate to the login page after signup
      navigate("/login");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form1">
        <div className="Auth-form-content">
          <img
            src={signupWizard}
            alt="workout wizard img"
            className="logo-img2"
          />
          <h3 className="Auth-form-title"></h3>
          <div className="textcenter2">
            Already registered?{" "}
            <Link to="/login" className="link-primary">
              Sign In
            </Link>
          </div>
          <div className="name">
            <label>Full Name:</label>
            <input
              type="text"
              className="formcontrol5"
              placeholder="e.g Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mails">
            <label>Email Address:</label>
            <input
              type="email"
              className="formcontrol3"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="passwords">
            <label>Password:</label>
            <input
              type="password"
              className="formcontrol4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button2">
            <button type="button" className="but2" onClick={handleSignup}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
