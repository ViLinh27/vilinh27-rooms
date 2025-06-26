import React from 'react';
import FontToggle from './FontToggle';
import DarkToggle from './DarkToggle';
import SoundToggle from './SoundToggle';

function NavbarLeft(){
    return(
        <>
        <div className="Home-nav-left">
            <SoundToggle/>

            <DarkToggle/>
            
            <FontToggle/>
        </div>
    </>
    )
}

export default NavbarLeft;