//this compoennt needs to interact with App.js
//so we're going to need a new context file to help with that.

//need to move the internal soundMode state and audio ref (for pop sound);
//gonna use isSoundOn and toggle Sound from context instead
import React, {useState, useEffect,useRef, useContext }  from 'react';
import  '../App.css';
import {SoundContext} from './soundSettings/SoundContext';

const SOUND_ON = "/assets/icons/soundonicon.png"
const SOUND_OFF = "/assets/icons/soundofficon.png"

const SON_NAME = "Sound On"
const SOFF_NAME = "Sound off"

function SoundToggle(){
    // const[soundMode,setSoundMode] = useState('Sound On');

    const {isSoundOn, toggleSound} = useContext(SoundContext);

    const imgToUse = isSoundOn ? SOUND_ON : SOUND_OFF
    const btnName = isSoundOn ? SON_NAME : SOFF_NAME


    const handleToggleClick = () =>{
        toggleSound();//call the global toggle sound from sound context copmonent
    }

   //to debut local stage:
   /*
    useEffect(() => {
        console.log("SoundToggle component re-rendered. Global sound is:", isSoundOn ? "On" : "Off");
    }, [isSoundOn])
   */ 

   return(
        <div className = "setting-item" onClick ={handleToggleClick}>
            <img src={imgToUse} alt={btnName} className="settingIcon"/>
            <span className = "setting-name">{btnName}</span>
        </div>
   );
}

export default SoundToggle;