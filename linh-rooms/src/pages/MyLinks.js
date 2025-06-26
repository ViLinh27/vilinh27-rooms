import React from 'react';
import '../App.css';

//components
import DecorateLink from '../components/DecorateLink';

function MyLinks(){

    return(
        <>
            <div className="App">
            <div className="MyLinks">
                <div className="MyLinks-Dev">
                    <div 
                        className="MyLinks-Link"
                    >
                        <DecorateLink
                            link="https://github.com/ViLinh27"
                            linkName = "github"
                        />
                    </div>
                    <div 
                        className="MyLinks-Link"
                    >
                        <DecorateLink
                            link="https://linh-is-tibia.itch.io"
                            linkName = "itch.io"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="https://codepen.io/vilinh27"
                            linkName="codepen"
                        />
                    </div>
                </div>
                <div className="MyLinks-Art">
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="https://vgen.co/linh_is_tibia"
                            linkName="Vgen"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="https://ko-fi.com/linhistibia"
                            linkName="kofi"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="https://www.youtube.com/@tibia-the-dog"
                            linkName="Youtube"
                        />
                    </div>
                </div>
                <div className="MyLinks-Socials">
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="https://www.instagram.com/linh_is_tibia/"
                            linkName="Instagram"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
                            linkName="Bluesky"
                        />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default MyLinks;