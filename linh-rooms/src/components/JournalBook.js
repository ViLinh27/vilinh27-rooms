import React, {useState} from 'react';

function JournalBook(props){
    const [isHovering,setIsHovering] = useState(false);
    const currJournalImg = isHovering ? '/assets/images/junkjournal/pexels-messalaciulia.jpg' :'/assets/images/junkjournal/pexels-wendywei.jpg'
    return(
        <>
            <div className="JournalBook">

            </div>
        </>
    )
}

export default JournalBook;