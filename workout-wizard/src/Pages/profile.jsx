import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import "../css/profile.css";
import { useNavigate } from 'react-router-dom';


    function ProfilePage() {
      const navigate = useNavigate();
      const [fullName, setFullName] = useState('');
    
      useEffect(() => {
        // Retrieve the logged-in user's email from local storage
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    
        if (loggedInUserEmail) {
          // Retrieve user data from local storage
          const storedUserData = localStorage.getItem('userData');
    
          if (storedUserData) {
            const userData = JSON.parse(storedUserData);
    
            // Find the user with the matching email
            const currentUser = userData.users.find(user => user.email === loggedInUserEmail);
    
            if (currentUser) {
              setFullName(currentUser.fullName);
            }
          }
        }
      }, []);
      return (
        <div className='mainBox'>
          <Header className="header-class" />
          <div className='profileBox'>
          <div className='columnProfile1'></div>
            <div className='columnProfile2'>
            <div className='profilePicBox'></div>
            <div className='profilYourNameBox'><p className='fullNameText'>{fullName}</p></div>
            <div className='profileDescriptionBox'></div>
            </div>
            <div className='columnProfile1'></div>
          </div>
        </div>
   
);
};
export default ProfilePage;
