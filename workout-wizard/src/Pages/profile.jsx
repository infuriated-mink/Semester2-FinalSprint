import React, { useState, useEffect } from "react";
import Header from "../components/headerProfile.jsx";
import "../css/profile.css";
import { useNavigate } from "react-router-dom";
import ProfileDescription from "../components/ProfileDescription";

function ProfilePage() {
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
  return (
    <div className="mainBoxy">
      <Header className="header-class" />
      <div className="profileBox">
        <div className="columnProfile1"></div>
        <div className="columnProfile2">
          <div className="profilePicBox">
            <img
              src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
              alt="Profile"
              width="355px"
              height="355px"
              className="rounded-circle me-2"
            />
          </div>
          <div className="profilYourNameBox">
            <p className="fullNameText">{fullName}</p>
          </div>
          <div className="profileDescriptionBox">
            <ProfileDescription />
          </div>
        </div>
        <div className="columnProfile1"></div>
      </div>
    </div>
  );
}
export default ProfilePage;
