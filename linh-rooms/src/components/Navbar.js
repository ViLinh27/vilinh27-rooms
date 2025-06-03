import React from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
function Navbar(){
    return(
        <>
            <div className="Home-nav">
                <NavbarLeft/>
                <NavbarRight/>
            </div>
        </>
    );
}

export default Navbar;