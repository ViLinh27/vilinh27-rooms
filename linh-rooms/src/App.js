import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/homepage/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.css';

// Components
import Homepage from './pages/Homepage';
import About from './pages/About';
import MyLinks from './pages/MyLinks';
import MyCV from './pages/MyCV';
import Contact from './pages/Contact';
import MusicDog from './components/MusicDog';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  /*
    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

    Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
    This also helps prevent crating new audio object with each re-render
    */
  const audioReference = useRef(null);

  //helps us initizliae the component once it's up
  useEffect(
    ()=>{
      audioReference.current = new Audio('/assets/audio/695951__m-murray__rainy-days-final-version-acousticpiano.wav');
      audioReference.current.loop = true;//makes sure to loop so it doesn't stop randomly
      audioReference.current.load();//preload the audio
    },[]
  );

  //this will help us play or pause the audio based on the state of IsPlaying
  useEffect(
    ()=>{
        if (audioReference.current){
          if(isPlaying){
            //In case something goes horribly wrong, notice the catch
            audioReference.current.play().catch( e=> console.error ("Audio playback error :(", e));
          }
        }
        else{
          audioReference.current.pause();
        }
    },[isPlaying]
  );

  const toggleMusic = ()=>{
    setIsPlaying(prevIsPlaying => !prevIsPlaying )
  };

  return (
    <div className="App">
      {/*to render navbar on all pages */}
      <Navbar />

      {/*The Routes */}
      <Routes>
        {/*
            element is for what component to render
            path is for the url path of said component
         */}
         <Route path="/pages/Homepage" element={<Homepage />}/>
         <Route path="/pages/About" element={<About/>}/>
         <Route path="/pages/MyLinks" element={<MyLinks />}/>
         <Route path="/pages/CV" element={<MyCV/>}/>
         <Route path="/pages/Contact" element={<Contact/>}/>
         
        {/* default route */}
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="*" element={<NotFoundPage />} />  Optional: for 404 pages */}
      </Routes>

         {/*onclick for button fucntion  */}
      <div onClick={toggleMusic}>
        <MusicDog
          soundState={isPlaying}
          altText={isPlaying ? "Tibia dancing" : "Default Tibia"}
        />
      </div>
    </div>
  );
}

export default App;
