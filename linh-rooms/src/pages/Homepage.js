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
                    captionText="Art Portfolio"
                    linkUrl="https://linhs-artroom.vercel.app"
                />
                <Door
                    captionText="Vgen"
                    linkUrl="https://vgen.co/linh_is_tibia"
                />
                <Door
                    captionText="Github"
                    linkUrl="https://github.com/ViLinh27"
                />
                <Door
                    captionText="Itch.io"
                    linkUrl="https://linh-is-tibia.itch.io"
                />
                <Door
                    captionText="Codepen"
                    linkUrl="https://codepen.io/vilinh27"
                />
                <Door
                    captionText="My Crafts"
                    linkUrl="https://www.instagram.com/tibia.makes/"
                />
                <Door
                    captionText="Journals"
                    linkUrl="/pages/journals"
                />
                <Door
                    captionText="My Redbubble Shop"
                    linkUrl="https://www.redbubble.com/people/tibia-the-dog/shop"
                />
                <Door
                    captionText="Youtube"
                    linkUrl="https://www.youtube.com/@tibia-the-dog"
                />
                <Door
                    captionText="Art Instagram"
                    linkUrl="https://www.instagram.com/linh_is_tibia/"
                />
                <Door
                    captionText="Buy Me a Coffee"
                    linkUrl="https://ko-fi.com/linhistibia"
                />
            </header>
        </>
    );
}

export default Homepage;