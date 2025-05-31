import React from 'react';
import Window from '../Window';
function NavbarRight(){
    return(
        <>
        <div className="Home-nav-right">
            <Window
                captionText="Home"
                link="#"
            />
            <Window
                captionText="About Me"
                link="#"
            />
            <Window
                captionText="CV"
                link="#"
            />
            <Window
                captionText="Links"
                link="#"
            />
            <Window
                captionText="Contact"
                link="#"
            /> 
        </div>
        </>
    )
}
export default NavbarRight;