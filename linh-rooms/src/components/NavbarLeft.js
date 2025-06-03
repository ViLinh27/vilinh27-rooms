import React from 'react';
import Settings from './Settings';
import FontToggle from './FontToggle';

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
            
            <FontToggle/>
        </div>
    </>
    )
}

export default NavbarLeft;