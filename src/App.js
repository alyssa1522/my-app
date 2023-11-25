import React, { useState } from 'react';
import './App.css';

const positiveAffirmations = [
  "I am confident and capable.",
  "I radiate positivity and joy.",
  "I am surrounded by love and support.",
  "I am worthy of success and happiness.",
  "I attract positive energy into my life.",
  // Add more affirmations as needed
];

function App() {
  const [count, setCount] = useState(0);
  const [affirmationIndex, setAffirmationIndex] = useState(0);

  const handleButtonClick = () => {
    setAffirmationIndex((prevIndex) => (prevIndex + 1) % positiveAffirmations.length);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Positive Affirmation: {positiveAffirmations[affirmationIndex]}
        </p>
        <p>
          Button Click Count: {count}
        </p>
        <button className="redButton " onClick={handleButtonClick}>
          Click Me!!!!
        </button>
      </header>
    </div>
  );
}

export default App;
