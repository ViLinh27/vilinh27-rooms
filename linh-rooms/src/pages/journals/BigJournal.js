import React from 'react';
import { journalsData } from '../../components/data/journalData';
import JournalPageCard from '../../components/JournalPageCard';

function BigJournal(){
    /* const bigjournalCards = journalsData.find(project => project.journalCategory === 'Big Journal');
    const bigjournalImgs = bigjournalCards.pageImage;
    const bigjournalLabels = bigjournalCards.pagelabel;
    const bigjournalCaptions = bigjournalCards.pageCaption; */
    return(
        <>
            <div className='App'>
                
                <div className="journalPage-Container">
                    {
                        journalsData.filter(element => element.journalCategory === 'Big Journal').map((journal,index)=>(
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