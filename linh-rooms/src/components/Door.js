import React, {useState} from 'react';
import '../DoorStyles.css'

function Door(props){
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
            >{/*note the event handlers in the divs */}
                <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
                     {/* Note
                            target _blank means link url will open new tab 
                            rel noopener noreferrer is for secuirty when opening links to new tabs
                    */}
                    <img className="Home-DoorImg" src={currImgInUse} alt={isHovering ? "open door" : "closed door"}/>
                    <div className="Home-Door-caption">{props.captionText}</div>
                </a>
            </div>
        </>
    )
}
export default Door;