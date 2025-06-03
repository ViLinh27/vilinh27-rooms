import React from 'react';
import Settings from './Settings';
import FontToggle from './FontToggle';
import DarkToggle from './DarkToggle';

function NavbarLeft(){
    return(
        <>
        <div className="Home-nav-left">
            <Settings
                settingImg="/assets/icons/soundonicon.png"
                settingName="Sound On"
            />
            <DarkToggle/>
            
            <FontToggle/>
        </div>
    </>
    )
}

export default NavbarLeft;