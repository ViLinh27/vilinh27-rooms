import React,{useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

//lock image to use
const LOCK_IMG = "/assets/icons/vecteezy_placeholderlock.png";
const LOCK_KEY_IMG = "/assets/icons/keyholeKey_placeholder.png";

function DecorateLink(props){
    const {link, linkName} = props

    const [isHovering, setIsHovering] = useState(false);

    const imgToUse = isHovering ? LOCK_KEY_IMG : LOCK_IMG;
    
    const handleMouseEnter = () =>{
        setIsHovering(true);
    }

    const handleMouseLeave = () =>{
        setIsHovering(false);
    }

    return(
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link className="MyLinks-external"to={link}>
                    <img 
                        className="MyLinks-Img" 
                        src={imgToUse} 
                        alt={isHovering ? "Lock " : "Key in Lock"}
                        
                    />
                    <div><p>{linkName}</p></div>
                </Link>
            </div>
        </>
    );
}
export default DecorateLink;