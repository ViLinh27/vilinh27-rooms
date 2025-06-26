
//useRef for the audio
//useEffect to do things that mess with the components behaviour
//useContext to use the SoundContext
import { useRef, useEffect, useContext } from 'react';
//so the sound on and off can still make sure the sound effects work with it
import { SoundContext } from '../components/soundSettings/SoundContext'; // Adjust path as needed

const usePlaySound = (audioPath) => {
    const audioRef = useRef(null);//null to start off before it gets imported in
    const { isSoundOn } = useContext(SoundContext);//to respect the sound on sound off button

    //initialize the sound when mounted
    //similar logic to hook used in App.js (where bg music is)
    useEffect(() => {
        if (!audioRef.current) {
            //load the audio stuff and import
            //audioPath is vague because we don't know which sound we're using yet
            audioRef.current = new Audio(audioPath);
            audioRef.current.load();
        }
    }, [audioPath]); // Re-create audio object if audioPath changes

    const playSound = () => {
        //makes sure isSOundOn which means sound on button is up
        if (isSoundOn && audioRef.current) {
            audioRef.current.currentTime = 0; // Rewind to start
            //catch to make sure we have something happening when 
            //sound doesn't play b/c something went horribly wrong
            audioRef.current.play().catch(e => console.error(`Sound playback error for ${audioPath}:`, e));
        }
    };

    return playSound;
};

export default usePlaySound;