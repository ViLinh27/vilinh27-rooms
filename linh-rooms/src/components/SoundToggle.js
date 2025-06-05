import React, {useState, useEffect,useRef }  from 'react';
import  '../App.css';

const SOUND_ON = "/assets/icons/soundonicon.png"
const SOUND_OFF = "/assets/icons/soundofficon.png"

const SON_NAME = "Sound On"
const SOFF_NAME = "Sound off"

function SoundToggle(){
    const[soundMode,setSoundMode] = useState('Sound On')

    const imgToUse = soundMode==='Sound On' ? SOUND_ON : SOUND_OFF
    const btnName = soundMode==='Sound On' ? SON_NAME : SOFF_NAME

    const audioReference=userRef(null);

    //initizlie after mounting
    useEffect(
        ()=>{
            if(!audioReference.current){
                audioReference.current = new Audio('/assets/audio/328119__dsg__pop-9.wav');
                audioReference.current.loop = true;
                audioReference.current.load();
            }
        },[]
    );

    useEffect(
        ()=>{
            console.log("play/pause")
            
        },[soundMode]
    );
}

export default SoundToggle;