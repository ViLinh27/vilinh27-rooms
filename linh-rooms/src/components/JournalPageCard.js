import React, {useState} from 'react';
import '../App.css';
import JournalPageModal from './JournalPageModal';
import {Paper, Button} from '@mui/material';

export default function JournalPageCard(props){
    const [open, setOpen] = useState(false);

    const handleClickOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    return(
        <Paper>
            <Button onClick={handleClickOpen}>
                <img className="journalPage-CardImg" src={props.pageImage} alt={props.pageLabel}/>
                <p>
                    {props.pageLabel}
                </p>
            </Button>

            <JournalPageModal
                pageNum={props.pageNum}
                pageLabel={props.pageLabel}
                pageCaption = {props.pageCaption}
                pageImage={props.pageImage} 
                onClose={handleClose}
                open={handleClickOpen}
            />
        </Paper>
    )
}