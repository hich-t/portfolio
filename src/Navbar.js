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
          onClick={() => window.open('https://www.linkedin.com/in/hicht/')}

        />
        <img
          className="logogithub"
          src="../github_logo.png"
          alt="linkedin logo"
          onClick={() => window.open('https://github.com/hich-t')}

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

        <div className='aboutmehead'>  
        <img className="hichpic" src="../hich.jpg" alt="Hicham"/>

        <h2>Welcome to my Portfolio !</h2>
        </div>
        <div className="aboutmetext">
        <p>
          I'm Hicham, 34y old and living in the Paris Area, France.
          <br />
          <br />
          I'm currently seeking a position to hone my skills as a Junior Web Developer (preferably front end for now), as I just graduated the IronHack bootcamp.<br/>
          During this intense adventure, i learned the fundamentals of JS, ReactJS for the front-end side, and Express, Node, MongoDB for the back-end. 
          <br />
          <br /> 
          Before that, my background is quite diverse.<br />
          I started in the CGI industry as a 3D generalist artist, then shifted to a character animation specialisation. During a few years I had the chance to work of diverses projects as a 3D artist, consultant, 3D animator, etc... Amongst and for various people all over the world. 
          <br /> 
          <br /> 
          Then, I embraced another carrer in retail, mixing my skills in the graphic world and my past experience in the hospitality world to manage several teams over the years. <br/>
          After that, I started my own business, and faced joys, challenges (especially during the COVID pandemic), and satisfactions. <br />
          <br />
          The next chapter after that took place in Morocco, where i successfully joined a great team of young and talented people in the IT business. It was a great ride.
          <br />
          <br/>
          Now I'm back in Paris and ready to rumble !

        </p>
        </div>
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
