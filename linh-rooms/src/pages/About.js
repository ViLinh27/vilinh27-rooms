import React, {useRef} from 'react';
import useHoverImg from '../hooks/useHoverImg';

function About(){
    const imgRef = useRef(null);//null to start off like the audio references in music dog or othe rfiles
    
    //about images that are gonna change
    const DEFAULT_MEPIC = "/assets/images/self-portrait.webp";
    const HOVER_PIC = "/assets/images/self-portrait-spooky.png";

    //the custom hook and passing the images above
    const currentImg = useHoverImg(imgRef, DEFAULT_MEPIC, HOVER_PIC);
    
    return(
        <>
            <div className="App">
                <div className="About">
                    <div className="About-text">
                        <h1>Who am I?</h1>
                        <p>
                            I go by Linh. 
                            I am a web developer and illustrator. 
                            Nice to meet you.
                        </p>
                        <p>
                            This website was made for learning purposes because
                            I wanted to review React.js after not touching it for a while.
                        </p>

                    </div>
                    <img 
                        className="About-img" 
                        id="mepic" 
                        ref={imgRef}//whatever the current image referenced is
                        src={currentImg} //the custom hook
                        alt="self portrait"

                        />
                </div>
            </div>
        </>
    )
}

export default About;