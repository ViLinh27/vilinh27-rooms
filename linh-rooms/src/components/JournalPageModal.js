import React from 'react';
import '../App.css'
import {Dialog} from '@mui/material';

function JournalPageModal({pageNum,pageLabel,pageCaption,pageImage,onClose, open}){

    const handleClose=()=>{
        onClose();
    }
    return(
        <>
            <div className='journalPage-Card'>
                <Dialog onClose={handleClose} open={open}>
                    <div className="journalPage-Label">
                        <p>{pageLabel}</p>
                    </div>
                    <img src={pageImage} alt={pageLabel} className='journalPage-ModalImg'/>
                    <div className='journalPage-Caption'>
                        {pageCaption}
                    </div>
                    <div className="journalPage-pageNum">
                        {pageNum}
                    </div>
                </Dialog>
            </div>
        </>
    )
}

export default JournalPageModal;