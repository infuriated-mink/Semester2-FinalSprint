import React from 'react';
import Header from "../components/Header.jsx";
import "../css/store.css";
import { Link } from 'react-router-dom';

    function Store() {
      return (
        <div className='mainBoxStore'>
          <Header className="header-class" />
          <div className='pageUnderCon'><p>Page under development</p>
          <Link to="/main">
        <button className="back-to-home-button">Back to Home</button>
      </Link></div>
          
        </div>
);
};
export default Store;