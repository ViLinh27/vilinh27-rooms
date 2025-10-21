import React, {useState} from 'react';
import '../App.css';
import JournalPageModal from './JournalPageModal';
import { Button} from '@mui/material';

export default function JournalPageCard(props){
    const [open, setOpen] = useState(false);

    const handleClickOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    return(
        <div className='journalPage-CardWrapper'>
            <Button onClick={handleClickOpen} className="journalPage-ButtonContainer">
                <img className="journalPage-CardImg" src={props.pageImage} alt={props.pagelabel}/>
                
            </Button>

            <div className="journalPage-CardText">
                {props.pagelabel}
            </div>

            <JournalPageModal
                pageNum={props.pageNum}
                pagelabel={props.pagelabel}
                pageCaption = {props.pageCaption}
                pageImage={props.pageImage} 
                onClose={handleClose}
                open={open}
            />
        </div>
    )
}