import React, { useState } from 'react';
import './App.css';
import KuromiImage from './Kuromi.jpeg';
//import bgImage from './bgtest.png';







const positiveAffirmations = [
  "I am confident and capable.",
  "I radiate positivity and joy.",
  "I am surrounded by love and support.",
  "I am worthy of success and happiness.",
  "I attract positive energy into my life.",
  // Add more affirmations as needed
];

function App() {
  //const [count, setCount] = useState(0);
  const [affirmationIndex, setAffirmationIndex] = useState(0);
  //const [buttonClicked, setButtonClicked] = useState(false);
  const [affirmation, setAffirmation] = useState('');

  const handleButtonClick = () => {
    setAffirmationIndex((prevIndex) => (prevIndex + 1) % positiveAffirmations.length);
    //setCount(count + 1);
    //setButtonClicked(true);
    const randomAffirmation = positiveAffirmations[affirmationIndex];
    setAffirmation(randomAffirmation);
    
  };

  

  return (
    
    <div className="App">
      
      <header className="App-header">
       
       <h1 id="moodQuestion"> How are you feeling today? </h1>

          <div class = "moodButtons">
          <button id="happyButton">happy</button>
          <button id="sadButton">sad</button>
          <button id="overwhelmedButton">overwhelmed</button>
          </div>
        
        {/* Display affirmation when available */}
        {affirmation && <p>{affirmation}</p>}

        {/*<p>Button Click Count: {count}</p>*/}
        {/* Display the button only if it hasn't been clicked*/}
        <button className="generateButton" onClick={handleButtonClick}>
          Click for an affirmation!
        </button>
        {/*
        {!buttonClicked && ( 
        <button className="generateButton" onClick={handleButtonClick}>
          Click for an affirmation!
        </button>
        )}
        */}

        

        <img className="image123" src={KuromiImage} alt="Kuromi character"/>


      </header>
    </div>
    
  );

 
}

export default App;
