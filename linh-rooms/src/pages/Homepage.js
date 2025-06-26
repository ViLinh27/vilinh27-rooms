import React from 'react';
import Door from '../components/Door';

function Homepage(){
    return(
        <>
            {/* <Navbar/> */}
            <header className="Home-main">
                <Door
                    captionText="Main Portfolio"
                    linkUrl="https://vilinh27.github.io"
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