import React from 'react';
import '../WindowStyles.css'
import {Link} from 'react-router-dom';

function Window(props){
    

    return(
        <>
            <div className="Nav-Window">
                <Link to={props.link}>
                    <img className="Nav-WindowImg" src="/assets/images/room-windows.webp" alt="Window"/>
                    <div><p>{props.captionText}</p></div>
                </Link>
            </div>
        </>
    )
}
export default Window;