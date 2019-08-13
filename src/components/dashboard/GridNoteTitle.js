import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

// styles for titles of dashboard items
const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    paddingLeft: '25px',
}

const GridNoteTitle = () => {
    return(
        // aligns the title and the add button along the header of the card
        <Grid container item direction='row' xs={12} justify='flex-end'>
            <Link to='/notes' style={title_styles}>Notes</Link>
            <div style={{marginRight: '25px'}}>
                <Link to='/addnote' style={title_styles}>Add</Link>
            </div>
        </Grid>
    )
}

export default GridNoteTitle;