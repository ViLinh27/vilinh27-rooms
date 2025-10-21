import React from 'react';
import { journalsData } from '../../components/data/journalData';
import JournalPageCard from '../../components/JournalPageCard';

function BigJournal(){
    return(
        <>
            <div className='App'>
                {/* journalData.map((journal)=>(
                    
                )) */}
                <div className="journalPage-Container">
                    {
                        journalsData.map((journal,index)=>(
                            <JournalPageCard
                                pageNum={index}
                                pageLabel={journal.pageLabel}
                                pageCaption = {journal.pageCaption}
                                pageImage = {journal.pageImage}
                            />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default BigJournal;