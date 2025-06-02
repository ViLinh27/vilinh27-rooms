import React from 'react';
import Window from '../Window';
//helps us see which is active by comparing each window link: 
import { useLocation } from 'react-router-dom';

//we determine which page is the active one here to keep logic centered here
//window is child to here , so window doesn't need to focus on that
function NavbarRight(){
    const location =useLocation();//what is current location object
    const currPath = location.pathname;//extract current path
    return(
        <>
        {/*Note how isActive checks currPath matches the window path */}
        <div className="Home-nav-right">
            {/*Note how isACtive compares 2 in Home b/c it's default page */}
            <Window
                captionText="Home"
                link="/pages/Homepage"
                id="nav-home"
                isActive={currPath === "/pages/Homepage" || currPath ==="/" }
            />
            {/*note how in ABout page, Isactive will pass true if currpath matches about */}
            <Window
                captionText="About Me"
                link="/pages/About"
                id="nav-aboutme"
                isActive={currPath === "/pages/About"}
            />
            {/*isAcitve passes true if CV path matches currpath */}
            <Window
                captionText="CV"
                link="/pages/CV"
                id="nav-cv"
                isActive={currPath === "/pages/CV"}
            />
            {/*isActive passes true if my links path matches currpath */}
            <Window
                captionText="Links"
                link="/pages/MyLinks"
                id="nav-links"
                isActive={currPath==="/pages/MyLinks"}
            />
            {/*isActive passes true if contact path matches currpath */}
            <Window
                captionText="Contact"
                link="/pages/Contact"
                id="nav-contact"
                isActive={currPath ==="/pages/Contact" }
            /> 
        </div>
        </>
    )
}
export default NavbarRight;