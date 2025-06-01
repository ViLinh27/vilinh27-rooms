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
            <Settings
                settingImg="/assets/icons/dysFontOff01.webp"
                settingName="Dyslexia Mode Off"
            />
        </div>
    </>
    )
}

export default NavbarLeft;