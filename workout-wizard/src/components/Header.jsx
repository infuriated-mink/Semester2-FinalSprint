import React from "react";
import workoutWizard from "../images/workoutwizard.png";
import fbImg from "../images/fb.png";
import xImg from "../images/twitter.png";
import instaImg from "../images/instagram.png";
import youTube from "../images/youtube.png";
import pinterest from "../images/pinterest.png";
import HomeDropdown from "./homedropdown";

const Header = () => {
  return (
    <>
      <div className="header-class">
        <img
          src={workoutWizard}
          alt="workout wizard img"
          className="logo-img"
        />
        <p className="sloganText">
          "A fit body is never late, nor is it early, it arrives precisely when
          it means to."
        </p>
        <div className="profile-container">
          <HomeDropdown />
          <div className="icons-div">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src={fbImg}
                alt="fb icon"
                width="20px"
                className="icon-class"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img
                src={xImg}
                alt="X icon"
                width="20px"
                className="icon-class"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instaImg}
                alt="insta icon"
                width="20px"
                className="icon-class"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img
                src={youTube}
                alt="youtube icon"
                width="20px"
                className="icon-class"
              />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={pinterest}
                alt="pinterest icon"
                width="20px"
                className="icon-class"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
