import React, { useState } from "react";
import Overlay from "react-overlay-component";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // top: `5em`,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

  return (
    <div className="navbar">
      <div className="logos_leftside">
        <img className="logo" src="../h_logo.png" alt="h logo" />

        <img
          className="logolinkedin"
          src="../linkedin_logo.png"
          alt="linkedin logo"
        />
        <img
          className="logogithub"
          src="../github_logo.png"
          alt="linkedin logo"
        />
      </div>
      <button
        className="aboutme"
        onClick={() => {
          setOverlay(true);
        }}
      >
        About Me
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2>Wemcome to my Portfolio !</h2>
        <p>
          I'm Hicham, 34y old and living in the Paris Area, France.
          <br />
          <br />
          I have quite a diverse background, I've begun my career in the CGi
          world, where I was a general CGI 3D artist at first and then slowly
          shifted to character animation.
          <br />
          During my studies (and after), I also workd in the personal security
          business and the hospitaly field, as a receptionnist
        </p>
      </Overlay>

      <button className="myresume">Resume</button>

      <button
        className="contactme"
        // onMouseEnter={() => setIsDropdownOpen(true)}
        // onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <a href="mailto:thabti.hicham@gmail.com" target="_blank">
          Contact Me
        </a>

        {/* {isDropdownOpen && (
          <div className="contactme-dropdown">
            <a href="mailto:youremail@example.com">Email</a>
            <hr className="hrbar" />
            <a href="https://linkedin.com/in/yourname">LinkedIn</a>
          </div>
        )} */}

      </button>
    </div>
  );
};

export default Navbar;
