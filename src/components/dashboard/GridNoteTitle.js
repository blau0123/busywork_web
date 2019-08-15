import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

// styles for titles of dashboard items
const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    padding: '15px',
}

/*
Component used as the title for the notes list in Dashboard to allow
a link to the notes list when clicked
*/
const GridNoteTitle = () => {
    return(
        // aligns the title and the add button along the header of the card
        <Grid container item direction='row' xs={12} justify='flex-end'>
            <Link to='/notes' style={title_styles}>Notes</Link>
            <div style={{padding: '15px'}}>
                <Link to='/addnote' style={title_styles}>Add</Link>
            </div>
        </Grid>
    )
}

export default GridNoteTitle;