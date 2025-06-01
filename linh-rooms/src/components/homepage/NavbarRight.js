import React from 'react';
import Window from '../Window';
function NavbarRight(){
    return(
        <>
        <div className="Home-nav-right">
            <Window
                captionText="Home"
                link="/pages/Homepage"
                id="nav-home"
            />
            <Window
                captionText="About Me"
                link="/pages/About"
                id="nav-aboutme"
            />
            <Window
                captionText="CV"
                link="/pages/CV"
                id="nav-cv"
            />
            <Window
                captionText="Links"
                link="/pages/MyLinks"
                id="nav-links"
            />
            <Window
                captionText="Contact"
                link="/pages/Contact"
                id="nav-contact"
            /> 
        </div>
        </>
    )
}
export default NavbarRight;