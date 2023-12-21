import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import userData from '../data/user.json'; 
import '../css/landingpage.css';
import workoutWizard from '../images/mohammad.png';

function LandingPage() {
  // useEffect will run once when the component mounts
  useEffect(() => {
    // Check if user data is not already in local storage
    if (!localStorage.getItem('userData')) {
      // Load user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, []);

  return (
  <div className="pushitrealgood">
    <div className="topbox">
      {/* Header goes here */}
      <div className="header-box">

        <div className="header-classimg"></div>
      </div>
      <div>
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
        </Link>
        <div className="workout">
        </div>
        <div className="grey-box">
          <div className="what-we-offer"> What we offer:</div>
          <div className="list"> - Build custom workouts with our workout <br /> - keep track of your workouts with our workout tracker <br /> - Members get discounts on select Workout Wizard merchandise! <br /> - Tips and Tricks from the Workout Wizard himself. <br /><br /></div>
          <Link to="/signup">
          <button className="btn-signup2">Sign Up</button>
        </Link>
        </div>
        <div className="bottom-box">
          <div className="our-mission">Our Mission</div>
          <p className="mission-paragraph">Unleash the magic within as we blend the mystical with the physical. Our mission is to guide aspiring wizards <br />
           on a transformative fitniss odyssey, sculpting not just bodies, but unlocking the full potential of mind, body, <br />
            and soul, Embrace the enchantment of a healthier, stronger you. 
          </p>
          <div className="contact">Contact us at info@workoutwizard.com</div>
          <div className="produced">workout Wizard, 2023</div>
        </div>
      </div>
    </div>
  </div> 
  );
}

export default LandingPage;
