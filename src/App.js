import "./App.css"
import React, { useState } from 'react';
import Navbar from "./Navbar"
import Header from "./Header"
import Content from "./Content"

const App = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(false);




  return(
    <>
    <Navbar />
    <div className="headerdiv">
    <Header setShowWelcomeText={setShowWelcomeText} />
    </div>
 {showWelcomeText && (
  
    <Content  />
  
)}
</>
  )
}

export default App