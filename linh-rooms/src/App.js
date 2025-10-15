import React, { useState, useEffect, useRef,useContext } from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.css';

// Components
import Homepage from './pages/Homepage';
import About from './pages/About';
import MyLinks from './pages/MyLinks';
import MyCV from './pages/MyCV';
import Contact from './pages/Contact';
import MyJournals from './pages/MyJournals';

import MusicDog from './components/MusicDog';
import PageUnderConstructor from './pages/PageUnderConstructor';
//Sound Context imported
import {SoundContext} from './components/soundSettings/SoundContext'; //

function App() {
  const {isSoundOn} = useContext(SoundContext);// gotta consume the sound context so we can control the music dog
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  /*
    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

    Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
    This also helps prevent crating new audio object with each re-render
    */
  const audioReference = useRef(null);

  //helps us initizliae the component once it's up (mounted)
  useEffect(
    ()=>{
      //if flag as a failsafe for useref preventing recreations
      if(!audioReference.current){
        audioReference.current = new Audio('/assets/audio/695951__m-murray__rainy-days-final-version-acousticpiano.wav');
        audioReference.current.loop = true;//makes sure to loop so it doesn't stop randomly
        audioReference.current.load();//preload the audio
      
        audioReference.current.volume = volume;
      }
    },[volume]
  );

  //this will help us play or pause the audio based on the state of IsPlaying
  useEffect(
    ()=>{
        console.log("Play/Pause Effect triggered. Current isPlaying:", isPlaying);

        if (audioReference.current){//should always exist after it comes up
          // Audio should play ONLY IF both the music dog is "playing" AND global sound is "on"
          if(isPlaying && isSoundOn){
            console.log("Attempting to play audio.");
            //In case something goes horribly wrong, notice the catch
            audioReference.current.play().catch( e=> console.error ("Audio playback error :(", e));
          }
          else{
            console.log("Attempting to pause audio.");
            audioReference.current.pause();
            // audioReference.current.currentTime = 0;
          }
        }
      
    },[isPlaying, isSoundOn]
  );

  //updates the volume whenever it changes
  useEffect(()=>{
    console.log("Volume Effect triggered. Current volume:", volume);

    if(audioReference.current){
      audioReference.current.volume = volume;
    }
  },[volume]);//note how this changes based on change of volume

  const toggleMusic = ()=>{
    setIsPlaying(prevIsPlaying => {
      console.log("toggle music. Old isPlaying state: ",prevIsPlaying,"new isplaying: ", !prevIsPlaying);
      return !prevIsPlaying;
    } );
  };

  //handler for volume input
  const handleVolumeChange = (event)=>{
    const newVolume = parseFloat(event.target.value);//volume comes in as string
    setVolume(newVolume);
  }

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
         <Route path="/pages/Under-Construction" element={<PageUnderConstructor/>}/>
         <Route path="/pages/journals" element={<MyJournals/>}/>
         
        {/* default route */}
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="*" element={<NotFoundPage />} />  Optional: for 404 pages */}
      </Routes>

         {/*onclick for button fucntion  */}
      <div className="MusicButton" onClick={toggleMusic}>
        <MusicDog
          soundState={isPlaying}
          altText={isPlaying ? "Tibia dancing" : "Default Tibia"}
        />
        
      </div>

      <label htmlFor="volume-slider">Volume: </label>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{Math.round(volume * 100)}%</span>
    </div>
  );
}

export default App;
