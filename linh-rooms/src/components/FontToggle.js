import React, {useState, useEffect } from 'react';
import '../App.css'
//component
import Settings from './Settings';

const COURIER_MODE = "/assets/icons/dysFontOff01.webp";
const LEXEND_MODE = "/assets/icons/dysFontOn.webp";

const DYSLEXIA_FRIENDLY = "Dyslexia Friendly";
const DYSLEXIA_NOTFRIENDLY = "Not Dyslexia Friendly";

function FontToggle(){
    //tracks the font states
    //notice how Courier prime is set as initial font state
    const [currFont, setCurrFont] = useState('Courier Prime');

    const imgToUse = currFont==='Courier Prime' ? COURIER_MODE : LEXEND_MODE
    const btnName = currFont==='Courier Prime' ? DYSLEXIA_NOTFRIENDLY : DYSLEXIA_FRIENDLY
    
    //function for toggling
    const toggleFont= ()=>{
        //Is the previous font couerier prime, if yes, set it to lexend, if not, change it to Couerier prime
        setCurrFont(prevFont =>
            prevFont === 'Courier Prime' ? 'Lexend' : 'Courier Prime'
        );
    }

    //useeffect to apply font class to body in css
    useEffect(()=>{
        //font change is on body tag for global change
        document.body.classList.remove('font-courier', 'font-lexend');

        if(currFont === 'Courier Prime'){
            document.body.classList.add('font-courier');
        }
        else{
            document.body.classList.add('font-lexend');
        }
    },[currFont]);

    return(
        <div className="App">
            <button onClick={toggleFont}>
                <Settings
                    settingImg={imgToUse}
                    settingName={btnName}
                />
                {/* Toggle Font (Current: {currFont}) */}
            </button>
        </div>
    )
}

export default FontToggle;