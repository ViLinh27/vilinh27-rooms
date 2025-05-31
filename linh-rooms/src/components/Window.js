import React from 'react';

function Window(props){
    return(
        <>
            <div>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/room-windows.webp" alt="Window"/>
                    <div>{props.captionText}</div>
                </a>
            </div>
        </>
    )
}
export default Window;