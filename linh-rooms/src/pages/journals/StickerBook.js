import React from 'react';
import { journalsData } from '../../components/data/journalData';
import JournalPageCard from '../../components/JournalPageCard';

function StickerBook(){
    return(
        <>
            <div className="journalPage-Container">
                {
                    journalsData.filter(element => element.journalCategory === 'Sticker Book').map((journal,index)=>(
                        <JournalPageCard
                            pageNum={index}
                            pageLabel={journal.pageLabel}
                            pageCaption = {journal.pageCaption}
                            pageImage = {journal.pageImage}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default StickerBook;