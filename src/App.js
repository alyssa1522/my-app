import React, { useState } from 'react';
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

//  import Button from "./button";
//import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
//import { Link } from 'react-router-dom';

import './App.css';
import Resources from './resources';
//import KuromiImage from './Kuromi.jpeg';
import crystalicon from './crystalicon.png';
//import bgImage from './bgtest.png';

// const rootElement = document.getElementById("root");
//     ReactDOM.render(
//       <BrowserRouter>
//        <Routes>
//         <Route exact path="/" component={Resources} />
//       </Routes>
//       </BrowserRouter>,
//       rootElement
//     );



const posAffirmHappy = [
  "I am confident and capable.",
  "I radiate positivity and joy.",
  "I am surrounded by love and support.",
  "I am worthy of success and happiness.",
  "I attract positive energy into my life.",
  "I choose a path of happiness and wellness.",
  "I am creating happiness within myself.",
  "I deserve to be happy.",
  "I'm happy and grateful for having loving people in my life.",
  "I radiate positivity, and others are drawn to my uplifting energy.",
  "I choose to focus on the present moment and find joy in simple pleasures.",
  "My heart is open to love, kindness, and joy.",
  "I am surrounded by positive and loving people.",
  "I trust in the process of life and let go of worry and fear.",
  "I am at peace with my past, present, and future.",
  "I attract positivity into my life with every breath I take."

];

const posAffirmSad = [
  "I am resilient.",
  "I am worthy of love.",
  "I deserve happiness. ", 
  "I am not my thoughts.",
  "I am enough.",
  "This feeling will not last forever.",
  "I honour myself and my strengths.",
  "I am allowed to take the time I need to heal and recover.",
  "It's okay to feel sad; my emotions are valid.",
  "I am deserving of love and support during difficult times.",
  "I choose to release the sadness and invite in peace and contentment.",
  "I am not alone; there are people who care about me and want to help.",
  "Each breath I take brings me closer to a sense of calm and serenity.",
  "I am resilient and capable of overcoming this challenging moment.",
  "I am not defined by my sadness; I am a multifaceted and resilient individual.",
  "I am surrounded by love, even when it may not feel like it.",
  "I am worthy of kindness and compassion, especially from myself.",
  "I give myself permission to let go of what I cannot control.",
  "I release the weight of sadness and embrace the lightness of being."
]

const posAffirmOverwhelmed = [
  "I am doing the best I can.",
  "I release the need for perfection.",
  "I choose to be calm and centered, regardless of the situation.",
  "I exude strength, grace, and flexibility.",
  "Today, I allow time for self-care and rejuvenation.",
  "I am capable of handling whatever comes my way.",
  "I release the need to control everything and trust the process of life.",
  "Overwhelm is just a feeling, and feelings are temporary.",
  "I am in control of my thoughts and choose to focus on what I can do.",
  "I trust in my ability to overcome challenges and learn from them.",
  "I prioritize self-care and give myself the time and space I need.",
  "I release the pressure to be perfect and embrace my imperfections.",
  "My well-being is a priority, and I honor my need for rest and relaxation.",
  "I choose to focus on the present moment and let go of future worries.",
  "I let go of what I cannot control and focus on what I can control.",
  "I am stronger than my challenges, and I can face them with grace.",
  "What I do is enough.",
  "I’m releasing all the tension from my body and mind.",
  "I will be okay."
]

const posAffirmAngry = [
  "As long as I keep my cool, I'm in control of myself.",
  "Time to relax and slow things donw. Take a time-out if I get uptight or start to notice my cues.",
  "I acknowledge my anger without judgment.",
  "I am in control of my emotions, and I choose to respond calmly.",
  "Anger is a passing emotion; I let it flow through me and then release it.",
  "I choose to express my feelings in a healthy and assertive manner.",
  "I am the master of my reactions; I choose to respond with kindness.",
  "Taking deep breaths helps me release tension and find calmness.",
  "I choose to respond to challenges with patience and understanding.",
  "I am not defined by my anger; I am a person of compassion and empathy.",
  "I choose to let go of grudges and create space for positive energy.",
  "I am capable of finding solutions and resolving conflicts peacefully.",
  "I am empowered to transform anger into motivation for positive change.",
  "I am free to choose how I react to situations, and I choose peace.",
  "I am in control of my actions, and I choose to respond with love."
]

const posAffirmMotivation = [
  "I am filled with energy, enthusiasm, and a positive mindset.",
  "My possibilities are endless, and I am capable of achieving my goals.",
  "I am focused, persistent, and will never give up on my dreams.",
  "Every challenge I face is an opportunity to grow and improve.",
  "I am committed to my goals, and I have the power to achieve them.",
  "My motivation is stronger than any obstacle in my path.",
  "I am inspired by the progress I make toward my goals.",
  "I attract success, and I am open to the abundance of opportunities around me.",
  "I trust in my ability to overcome challenges and achieve greatness.",
  "I am motivated by my passion and the vision of the life I want to create.",
  "I am disciplined, focused, and dedicated to my success.",
  "I am in control of my time and make every moment count toward my goals.",
  "Challenges are stepping stones to my success and growth.",
  "I am a magnet for positive energy and success.",
  "My mind is clear, and I am motivated to take decisive action.",
  "I am aligned with my purpose, and my actions reflect my values.",
  "I am grateful for the opportunities that come my way, and I seize them with enthusiasm.",
  "I am strong enough to tackle any challenge.",
  "I am successful.",
  "I am strong.",
  "I am inspiring people through my work.",
  "I am grateful for everything I have in my life.",
  "I am not defined my by past; I am driven by my future.",
  "Each and every day, I am getting closer to achieving my goals.",
  "I finish what matters and let go of what does not.",
  "My life has meaning. What I do has meaning. My actions are meaningful and inspiring.",


]


function App() {
  const [state,setState]=useState(false);
  let url="";
  let element=<p>No handle exists for this user!</p>;
  if(state) element=<a href={url}>LinkedIn handle</a>;
  //const navigate = useNavigate();
  const [affirmationIndex, setAffirmationIndex] = useState(0);
  //const [buttonClicked, setButtonClicked] = useState(false);
  const [affirmation, setAffirmation] = useState('');
 
  //const [buttonOpen, setButtonOpen] = useState(false); 

  
  // This handles when the user clicks one of the mood's button and it generates an affirmation
  const handleButtonClick = (buttonName) => {
    let anAffirmation = '';
    switch (buttonName){
      case 'happy':
        anAffirmation = printAffirmation(posAffirmHappy)
       //setButtonClicked(true)
        break;
      case 'sad':
        anAffirmation = printAffirmation(posAffirmSad)
        //setButtonClicked(true)
        break;
      case 'overwhelmed':
        anAffirmation = printAffirmation(posAffirmOverwhelmed)
       //setButtonClicked(true)
        break;
      case 'angry':
        anAffirmation = printAffirmation(posAffirmAngry)
        break;
      case 'motivation':
        anAffirmation = printAffirmation(posAffirmMotivation)
        break;
        
      default:
        break;
    }
    setAffirmation(anAffirmation);
    };
 
    // This is a function to print the affirmation based on user's mood
    
  const printAffirmation = (array) => {
    let randomAffirmation = '';
    switch (array) {
      case posAffirmHappy:
        setAffirmationIndex(Math.floor(Math.random() * array.length));
        randomAffirmation = posAffirmHappy[affirmationIndex];
        break;
      case posAffirmSad:
        setAffirmationIndex(Math.floor(Math.random() * array.length));
        randomAffirmation = posAffirmSad[affirmationIndex];
        break;
      case posAffirmOverwhelmed:
        setAffirmationIndex(Math.floor(Math.random() * array.length));
        randomAffirmation = posAffirmOverwhelmed[affirmationIndex];
        break;
      case posAffirmAngry:
        setAffirmationIndex(Math.floor(Math.random() * array.length));
        randomAffirmation = posAffirmAngry[affirmationIndex];
        break;
      case posAffirmMotivation:
        setAffirmationIndex(Math.floor(Math.random() * array.length));
        randomAffirmation = posAffirmMotivation[affirmationIndex];
        break;
      default:
        break;
    }
  
    return randomAffirmation;
  };

  



  return (
    // <BrowserRouter>
    //   <main>
    //     <Routes>
    //       <Route path="/resources" element={<resources />}/>

        
    
        <div className="App">
          {element}
          <header className="App-header">
          <h1 id="moodQuestion"> How are you feeling today? </h1>
          <div class="printStatement">
            <p id="generateText">Press the buttons below to generate positive affirmations:</p>
          </div>
            <div class = "moodButton-container">
              <button class="happyButton" onClick = {() => handleButtonClick('happy')}>happy</button>
              <button class="sadButton" onClick = {() => handleButtonClick('sad')}>sad</button>
              <button class="overwhelmedButton"  onClick = {() => handleButtonClick('overwhelmed')}>overwhelmed</button>
              <button class="angryButton" onClick = {() => handleButtonClick('angry')}>angry</button>
              <button class="motivationButton" onClick={() => handleButtonClick('motivation')}>motivated</button>
            </div>

            {/* <div class = "webpageButton">
                <Link to = "/resources">
                <button class="resourcesButton" onClick={() => navigate("/resources")}>mental health resources</button>
                </Link>
            </div> */}
            
            
          


            {/* Display affirmation when available */}
            {affirmation && <p>{affirmation}</p>}

            {/*<p>Button Click Count: {count}</p>*/}
            {/* Display the button only if it hasn't been clicked*/}
            {/* make new const*/}
        
            
            
            {/* {buttonClicked && ( 
            <button className="generateButton" onClick={printAffirmation}>
              Click for an affirmation!
            </button>
            )} */}
          

            <img className="crystal" src={crystalicon} alt="crystal"/>


        
          </header>
        </div>
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    
  );
}



export default App;
