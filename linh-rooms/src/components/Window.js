import React from 'react';

function Window(props){
    return(
        <>
            <div className="Nav-Window">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img className="Nav-WindowImg" src="/assets/images/room-windows.webp" alt="Window"/>
                    <div>{props.captionText}</div>
                </a>
            </div>
        </>
    )
}
export default Window;