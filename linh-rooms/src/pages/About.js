import React from 'react';

function About(){
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
                    <img className="About-img" src="/assets/images/self-portrait.webp" alt="self portrait"/>
                </div>
            </div>
        </>
    )
}

export default About;