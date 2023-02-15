import "./App.css"
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

const App = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(false);

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowArrow(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
    <>
    <Navbar />

    <div className="headerdiv">




    <Header setShowWelcomeText={setShowWelcomeText} />

    {showArrow && (
        <div className="arrow">
          <img className="arrowimg" src="../down_arrow.png" alt="Arrow icon" />
          <p className="scrolltext">Scroll down to see my work!</p>
        </div>
      )}


    
    </div>
 {showWelcomeText && (
  
    <Content  />
  
)}

<Footer />
</>
  )
}

export default App