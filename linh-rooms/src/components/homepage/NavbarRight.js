import React from 'react';
import Window from '../Window';
function NavbarRight(){
    return(
        <>
        <div className="Home-nav-right">
            <Window
                captionText="Home"
                link="#"
                id="nav-home"
            />
            <Window
                captionText="About Me"
                link="#"
                id="nav-aboutme"
            />
            <Window
                captionText="CV"
                link="#"
                id="nav-cv"
            />
            <Window
                captionText="Links"
                link="#"
                id="nav-links"
            />
            <Window
                captionText="Contact"
                link="#"
                id="nav-contact"
            /> 
        </div>
        </>
    )
}
export default NavbarRight;