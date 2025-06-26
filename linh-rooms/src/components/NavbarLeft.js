import React from 'react';
import Settings from './Settings';
import FontToggle from './FontToggle';
import DarkToggle from './DarkToggle';
import SoundToggle from './SoundToggle';

function NavbarLeft(){
    return(
        <>
        <div className="Home-nav-left">
            {/* <Settings
                settingImg="/assets/icons/soundonicon.png"
                settingName="Sound On"
            /> */}
            <SoundToggle/>

            <DarkToggle/>
            
            <FontToggle/>
        </div>
    </>
    )
}

export default NavbarLeft;