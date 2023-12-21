import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from './Pages/landingpage';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import Store from './Pages/store';
import ProfilePage from './Pages/profile';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
