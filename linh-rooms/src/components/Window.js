import React from 'react';
import '../WindowStyles.css'

function Window(props){
    return(
        <>
            <div className="Nav-Window">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img className="Nav-WindowImg" src="/assets/images/room-windows.webp" alt="Window"/>
                    <div><p>{props.captionText}</p></div>
                </a>
            </div>
        </>
    )
}
export default Window;