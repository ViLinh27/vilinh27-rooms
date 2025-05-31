import React from 'react';
import Navbar from '../components/homepage/Navbar';
import Door from '../components/Door';

function Homepage(){
    return(
        <>
            <Navbar/>
            <header className="Home-main">
                <Door
                    captionText="Main Portfolio"
                    linkUrl="#"
                />
                <Door
                    captionText="Art"
                    linkUrl="#"
                />
                <Door
                    captionText="Code"
                    linkUrl="#"
                />
                <Door
                    captionText="UX"
                    linkUrl="#"
                />
                <Door
                    captionText="Writing"
                    linkUrl="#"
                />
                <Door
                    captionText="Crafts"
                    linkUrl="#"
                />
            </header>
        </>
    );
}

export default Homepage;