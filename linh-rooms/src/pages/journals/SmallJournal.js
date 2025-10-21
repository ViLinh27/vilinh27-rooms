import React from 'react';
import { journalsData } from '../../components/data/journalData';
import JournalPageCard from '../../components/JournalPageCard';

function SmallJournal(){
    return(
        <>
            <div className='App'>
                <div className="journalPage-Container">
                   {
                        journalsData.filter(element => element.journalCategory === 'Small Journal').map((journal,index)=>(
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

export default SmallJournal;