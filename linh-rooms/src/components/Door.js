import React from 'react';

function Door(props){
    return(
        <>
            <div>
                <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
                     {/* Note
                            target _blank means link url will open new tab 
                            rel noopener noreferrer is for secuirty when opening links to new tabs
                    */}
                    <img src="/assets/images/room-doors.webp" alt="door"/>
                    <div>{props.captionText}</div>
                </a>
            </div>
        </>
    )
}
export default Door;