import React, {useRef} from 'react';
import useHoverImg from '../hooks/useHoverImg';

function JournalBook({journalImgClosed,journalImgOpen,journalType}){
    const imgRef = useRef(null);

    const currentImg = useHoverImg(
        imgRef,
        journalImgClosed,
        journalImgOpen
    );


    return(
        <>
            <div className="JournalBook">
                <img 
                    id="journalBook-img"
                    ref={imgRef}
                    src={currentImg}
                    alt={`${journalType} image`}
                />
                <div id="journalBook-caption">{journalType}</div>
            </div>
        </>
    )
}

export default JournalBook;