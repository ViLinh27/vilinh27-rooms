import React, {useRef} from 'react';
import useHoverImg from '../hooks/useHoverImg';
import {Link} from 'react-router-dom';

function JournalBook({journalImgClosed,journalImgOpen,journalType,journalPagePath}){
    const imgRef = useRef(null);

    const currentImg = useHoverImg(
        imgRef,
        journalImgClosed,
        journalImgOpen
    );


    return(
        <>
            <Link className="JournalBook" to={journalPagePath}>
                <img 
                    id="journalBook-img"
                    ref={imgRef}
                    src={currentImg}
                    alt={`${journalType} image`}
                />
                <div id="journalBook-caption">{journalType}</div>
            </Link>
        </>
    )
}

export default JournalBook;