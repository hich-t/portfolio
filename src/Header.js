import React, { useState, useEffect } from 'react';


const TypingText = ({ text, delay }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const typing = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 100);
  
      return () => clearInterval(interval);
    }, delay);
  
    return () => clearTimeout(typing);
  }, [text, delay]);

  return (
    <span className="typing-text">
      {typedText}
    </span>
  );
};

const Header = ({ setShowWelcomeText }) => {
    const [showWelcomeText, setShowWelcomeTextState] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowWelcomeTextState(true);
        setShowWelcomeText(true);
      }, 6000);
  
      return () => clearTimeout(timeout);
    }, [setShowWelcomeText]);

  return (
    <div className="header">
      <TypingText className="headertext" text="Hicham Thabti." delay={0} />
      <br />
      <TypingText className="headertext" text="Junior Web Developer." delay={3000} />
     
     <div className='welcome'>
      {showWelcomeText && <>
        <div className="welcome-text">WELCOME TO MY PORTFOLIO.</div> 
        <div className="project-pres">Here are some projects i have done in last few weeks.</div>
        </>
      }
      </div>

    </div>
  );
};

export default Header;
