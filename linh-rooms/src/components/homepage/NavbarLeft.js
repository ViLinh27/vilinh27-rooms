import React from 'react';
import Settings from '../Settings';

function NavbarLeft(){
    return(
        <>
        <div className="Home-nav-left">
            <Settings
                settingImg="/assets/icons/soundonicon.png"
                settingName="Sound On"
            />
            <Settings
                settingImg="/assets/icons/lightmodeicon.png"
                settingName="Light Mode"
            />
            <div>Font changer icon goes here</div>
        </div>
    </>
    )
}

export default NavbarLeft;