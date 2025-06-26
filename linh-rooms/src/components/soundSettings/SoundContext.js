//react import per usual
//use state because we're gonna mess with state stuff
//useeffect because we're gonna add effects that will mess with state stuff

import React, { createContext, useState, useEffect } from 'react';

//THIS IS WHERE YOU MANAGE THE MAIN SOUND STATE STUFFf


// Create a Context for sound
//track what kind of sound context we are currently in (on or off)
export const SoundContext = createContext();

// Create a Provider component
//This ties into the entire sound context
export const SoundProvider = ({ children }) => {

    //the states we're working with
    const [isSoundOn, setIsSoundOn] = useState(true); // Default to sound on

    // Function to toggle the sound state
    // if th previous sound is sound on, we're gonna switch to opposite
    //if not on, switch to opposite which is on
    const toggleSound = () => {
        setIsSoundOn(prevIsSoundOn => !prevIsSoundOn);
    };

    return (
        //Looks like the provider works for the context
        <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};