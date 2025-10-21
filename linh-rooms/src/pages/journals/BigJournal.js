import React from 'react';
import { journalsData } from '../../components/data/journalData';
import JournalPageCard from '../../components/JournalPageCard';

function BigJournal(){
    return(
        <>
            <div className='App'>
                
                <div className="journalPage-Container">
                    {
                        journalsData.filter(element => element.journalCategory === 'Big Journal').map((journal,index)=>(
                            <JournalPageCard
                                pageNum={index}
                                pagelabel={journal.pagelabel}
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