import React from 'react';

const DEFAULT_DOG = "/assets/images/tibia-soundoff.png"
const DANCE_DOG = "/assets/images/tibia-soundon.png"

function MusicDog(props){

    const {isPlaying, altText } = props
    const imgToUse = isPlaying ? DANCE_DOG : DEFAULT_DOG;
    return(
        <>
            <div class="App-Footer">
                <img className="App-musicdog" src={imgToUse} alt={altText}/>
            </div>
        </>
    )
}

export default MusicDog;