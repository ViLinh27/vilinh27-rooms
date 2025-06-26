import React, {useState, useEffect } from 'react';
import '../App.css'

//component
import Settings from './Settings';

const LIGHT_MODE = "/assets/icons/lightmodeicon.png";
const DARK_MODE = "/assets/icons/darkmodeicon.png";

const LM_NAME = 'Light Mode';
const DM_NAME = 'Dark Mode';

function DarkToggle(){
    const[currMode, setCurrMode] = useState('Light Mode');

    const imgToUse = currMode==='Light Mode' ? LIGHT_MODE : DARK_MODE;
    const btnName = currMode === 'Light Mode' ? LM_NAME: DM_NAME;

    //if previous mode is light mode, set to dark, if not, set to light
    const toggleMode= () =>{
        setCurrMode(prevMode=>
            prevMode === 'Light Mode' ? 'Dark Mode' : 'Light Mode'
        );
    }

    //useeffect to change background and font color
    useEffect(()=>{
        //font change is on body  tag for most change
        document.body.classList.remove('light-mode');
        // document.App.classList.remove('light-mode');
        document.body.classList.remove('dark-mode');

        if(currMode === 'Light Mode'){
            document.body.classList.add('light-mode');
            // document.App.classList.add('light-mode');
        }
        else{
            document.body.classList.add('dark-mode');
            // document.App.classList.add('dark-mode');
        }
    },[currMode]);

    return(
        <div className="App">
            <button onClick={toggleMode}>
                <Settings
                    settingImg={imgToUse}
                    settingName={btnName}
                />
                {/* Toggle Mode (Current: {currMode}) */}
            </button>
        </div>
    )
}

export default DarkToggle;