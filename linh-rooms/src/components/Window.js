import React from 'react';
import '../WindowStyles.css'
import {Link} from 'react-router-dom';
import usePlaySound from '../hooks/usePlaySound';

// window images to use

const DEFAULT_WINDOW_IMG = "/assets/images/room-windows.webp";
const ACTIVE_WINDOW_IMG= "/assets/images/window-curtains.webp";
const AUDIO_TO_USE = "/assets/audio/openwindowprocessed.mp3";

function Window(props){
    const playWindowSound = usePlaySound(AUDIO_TO_USE);

    //something called descruture props
    const {link, captionText, id, isActive }=props;

    //which page is active will tell you which img src to use
    const imgToUse = isActive ? ACTIVE_WINDOW_IMG : DEFAULT_WINDOW_IMG


    const handleWindowNoise =()=>{
        playWindowSound();//play if sound on mode on
        console.log('window button clicked');
    }
    return(
        <>
            <div className="Nav-Window" onClick={handleWindowNoise}>
                <Link to={link}>
                    <img className="Nav-WindowImg" src={imgToUse} alt={`${captionText} Window`} id={id}/>
                    <div><p>{captionText}</p></div>
                </Link>
            </div>
        </>
    )
}
export default Window;