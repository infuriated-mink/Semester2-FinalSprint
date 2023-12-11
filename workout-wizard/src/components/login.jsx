import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "../css/login.css";
import 'react-toastify/dist/ReactToastify.css';
import userData from "../data/user.json";

export default function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (via local storage)
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      navigate("/home");
    }
  }, [navigate]);

  const notify = (user) => {
    setIsToastOpen(true);
    toast(
      `Welcome ${user.firstName}`,
      { position: toast.POSITION.TOP_CENTER },
      { autoclose: 4000 },
      { onClose: () => setIsToastOpen(false) }
    )
  };

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  const storeLoggedInUser = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  async function goToPage() {
    await wait(5000);
    navigate(`/home`);
  }

  const handleLogin = () => {
    if (userData[username] && userData[username].password === password) {
      const user = userData[username];
      notify(user);
      storeLoggedInUser(user);
      goToPage();
    } else {
      setLoginError("Username and password do not match.");
    }
  };

  return (
    <div className="mainbox">
      {/* ... rest of your code ... */}
      <div className="Auth-form-container">
        <form className="Auth-form">
          {/* ... rest of your form ... */}
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            {loginError && <span className="error-message">{loginError}</span>}
            <br />
          </p>
          <div className="text-center mt-3">
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
