import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/homedropdown.css";

const HomeDropdown = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Retrieve the logged-in user's email from local storage
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    if (loggedInUserEmail) {
      // Retrieve user data from local storage
      const storedUserData = localStorage.getItem("userData");

      if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Find the user with the matching email
        const currentUser = userData.users.find(
          (user) => user.email === loggedInUserEmail
        );

        if (currentUser) {
          setFullName(currentUser.fullName);
        }
      }
    }
  }, []);

  const handleProfileClick = () => {
    // Navigate to the main page
    navigate("/profile");
  };

  const handleStoreClick = () => {
    // Navigate to the main page
    navigate("/store");
  };

  const handleLogout = () => {
    // Clear the logged-in user's email from local storage
    localStorage.removeItem("loggedInUserEmail");

    // Navigate back to the main page
    navigate("/");
  };

  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
          alt="Profile"
          width="45px"
          height="45px"
          margin-bottom="50px"
          className="rounded-circle me-2"
        />
      </a>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <span className="dropdown-item">{fullName}</span>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={handleProfileClick}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={handleStoreClick}
          >
            Store
          </button>
        </li>

        <li>
          <button
            className="dropdownitemlog2"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HomeDropdown;
