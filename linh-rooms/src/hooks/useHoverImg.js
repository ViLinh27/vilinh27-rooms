import { useState, useEffect } from 'react';

const useHoverImg = (imgRef, defaultImg, hoverImg) => {
    const [currentImg, setCurrentImg] = useState(defaultImg);

    useEffect(()=>{
        //initialize when mounted
        const imgElement = imgRef.current;//whatever is currently the image

        if(!imgElement){
            return;
            //if the ref of current image not attached to anything
        };

        const handleMouseEnter = ()=>{
            setCurrentImg(hoverImg);//set the state to the hover image
        };

        const handleMouseLeave = () =>{
            setCurrentImg(defaultImg);//set the state back to the default img
        };

        //event listener so the image actually changes
        imgElement.addEventListener('mouseenter',handleMouseEnter);
        imgElement.addEventListener('mouseleave',handleMouseLeave);

        //clean up for after everything unmounts
        return ()=>{
            imgElement.removeEventListener('mouseenter',handleMouseEnter);
            imgElement.removeEventListener('mouseleave',handleMouseLeave);
        };

    },[imgRef,defaultImg,hoverImg]);//since these are what are changing this goes in dependency array
    //also helps when these things change

    return currentImg;//return what ever the current img sourc is
};

export default useHoverImg;