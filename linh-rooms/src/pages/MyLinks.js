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
                            link="#"
                            linkName = "github"
                        />
                    </div>
                    <div 
                        className="MyLinks-Link"
                    >
                        <DecorateLink
                            link="#"
                            linkName = "itch.io"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
                            linkName="codepen"
                        />
                    </div>
                </div>
                <div className="MyLinks-Art">
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
                            linkName="Vgen"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
                            linkName="kofi"
                        />
                    </div>
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
                            linkName="Youtube"
                        />
                    </div>
                </div>
                <div className="MyLinks-Socials">
                    <div className="MyLinks-Link">
                        <DecorateLink
                            link="#"
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