import React from 'react';
import '../App.css'
import {Dialog} from '@mui/material';

function JournalPageModal({pageNum,pagelabel,pageCaption,pageImage,onClose, open}){

    const handleClose=()=>{
        onClose();
    }
    return(
        <>
                <Dialog onClose={handleClose} open={open}>
                    <div className='journalPage-Modal'>
                        <img src={pageImage} alt={pagelabel} className='journalPage-ModalImg'/>
                        <div className="journalPage-Modal_text">
                            <div className="journalPage-Label">
                                {pagelabel}
                            </div>
                            <div className='journalPage-Caption'>
                                {pageCaption}
                            </div>
                            <div className="journalPage-pageNum">
                                {pageNum}
                            </div>
                        </div>
                    </div>
                    
                </Dialog>
        </>
    )
}

export default JournalPageModal;