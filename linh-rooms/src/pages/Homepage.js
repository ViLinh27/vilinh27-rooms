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
                    linkUrl="https://linhs-artroom.vercel.app"
                />
                <Door
                    captionText="Code"
                    linkUrl="/pages/Under-Construction"
                />
                <Door
                    captionText="UX"
                    linkUrl="/pages/Under-Construction#"
                />
                <Door
                    captionText="Writing"
                    linkUrl="/pages/Under-Construction"
                />
                <Door
                    captionText="Crafts"
                    linkUrl="/pages/Under-Construction"
                />
                <Door
                    captionText="Journals"
                    linkUrl="/pages/journals"
                />
            </header>
        </>
    );
}

export default Homepage;