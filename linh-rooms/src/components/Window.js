import React from 'react';
import '../WindowStyles.css'
import {Link} from 'react-router-dom';

// window images to use

const DEFAULT_WINDOW_IMG = "/assets/images/room-windows.webp";
const ACTIVE_WINDOW_IMG= "/assets/images/window-curtains.webp";

function Window(props){
    //something called descruture props
    const {link, captionText, id, isActive }=props;

    //which page is active will tell you which img src to use
    const imgToUse = isActive ? ACTIVE_WINDOW_IMG : DEFAULT_WINDOW_IMG

    return(
        <>
            <div className="Nav-Window">
                <Link to={link}>
                    <img className="Nav-WindowImg" src={imgToUse} alt={`${captionText} Window`} id={id}/>
                    <div><p>{captionText}</p></div>
                </Link>
            </div>
        </>
    )
}
export default Window;