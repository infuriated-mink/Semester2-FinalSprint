import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './Pages/landingpage';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import MainPage from './Pages/mainpage';
import Store from './Pages/store';
import ProfilePage from './Pages/profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
<<<<<<< Updated upstream
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
=======
        <Route path="/main" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/store" element={<Store />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
