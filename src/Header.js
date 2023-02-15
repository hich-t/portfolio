import React, { useState, useEffect } from "react";

const TypingText = ({ text, delay }) => {
  const [typedText, setTypedText] = useState("");

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

  return <span className="typing-text">{typedText}</span>;
};

const Header = ({ setShowWelcomeText }) => {
  const [showWelcomeText, setShowWelcomeTextState] = useState(false);

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcomeTextState(true);
      setShowWelcomeText(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [setShowWelcomeText]);




  return (
    <div className={`header${fixed ? ' fixed' : ''}`}>

      <TypingText text="Hey !" delay={0} />
      <TypingText text="I'm Hicham," delay={500} />

      <TypingText text="junior web developer" delay={1000} />

      <div className='welcome'>
      {showWelcomeText && <>
        <div className="welcome-text">Welcome to my portfolio !</div> 

        </>
      }
      </div>

    </div>
  );
};

export default Header;
