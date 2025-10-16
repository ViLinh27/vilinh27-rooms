import React from 'react';
import JournalBook from '../components/JournalBook';
import { journalTypes } from '../components/data/journalData';

function MyJournals(){
    return(
        <>
            <div className='App'>
                {/* The JournalBook component goes here */}
                {/* <div>The big junk journal</div>
                <div> The sticker book</div>
                <div> The smaller junk journal</div>
                <div> The Spain sketches</div> */}
                <div class="Journal-container">
                    {
                        journalTypes.map((journal)=>(
                            <JournalBook
                                journalImgClosed={journal.journalImgClosed}
                                journalImgOpen = {journal.journalImgOpen}
                                journalType = {journal.journalType}
                                journalPagePath={journal.journalPagePath}
                            />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default MyJournals;