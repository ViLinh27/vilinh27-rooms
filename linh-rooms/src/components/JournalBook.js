import React, {useState} from 'react';

function JournalBook({journalImgClosed,journalImgOpen,journalName}){
    const [isHovering] = useState(false);
    // const currJournalImg = isHovering ? '/assets/images/junkjournal/pexels-messalaciulia.jpg' :'/assets/images/junkjournal/pexels-wendywei.jpg'
    const currJournalImg = isHovering ? journalImgOpen: journalImgClosed;
    return(
        <>
            <div className="JournalBook">
                <img id="journalBook-img" src={currJournalImg} alt="Journal Img"/>
                <div id="journalBook-caption">{journalName}</div>
            </div>
        </>
    )
}

export default JournalBook;