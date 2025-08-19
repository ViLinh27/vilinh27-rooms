import React, {useState} from 'react';
import '../DoorStyles.css';
import usePlaySound from '../hooks/usePlaySound';

function Door(props){
    const AUDIOTOUSE = "/assets/audio/unlockingDoorProcessed.mp3";
    const playDoorSound = usePlaySound(AUDIOTOUSE);

    const handleDoorNoise =()=>{
        playDoorSound();//play the sound if global sound mode on
        console.log('door clicked');
    }

    //need to track state of hovering on door and outside door
    const [isHovering, setIsHovering] = useState(false);

    //how we see which image to use based on hover state
    //notice the tertiary statement
    //if isHovering is true, use open door asset,
    //if not use closed door asset
    const currImgInUse = isHovering ? '/assets/images/opendoorway.webp' : '/assets/images/room-doors.webp';

    //handles when we toggle setIsHovering state
    const handleMouseEnter = ()=>{
        setIsHovering(true);
    }
    const handleMouseLeave = () =>{
        setIsHovering(false);
    }
    
    return(
        <>
            <div 
                className="Home-Door"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleDoorNoise}
            >{/*note the event handlers in the divs */}
                <a href={props.linkUrl} target="_self" rel="noopener noreferrer">
                     {/* Note
                            target _blank means link url will open new tab 
                            rel noopener noreferrer is for secuirty when opening links to new tabs
                    */}
                    <img className="Home-DoorImg" src={currImgInUse} alt={isHovering ? "open door" : "closed door"}/>
                    <div className="Home-Door-caption"><p>{props.captionText}</p></div>
                </a>
            </div>
        </>
    )
}
export default Door;