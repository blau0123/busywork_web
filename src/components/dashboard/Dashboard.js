import React from 'react';
import Grid from '@material-ui/core/Grid';
import NotesPrev from './NotesPrev';

const grid_item_styles = {
    height: '100%',
    paddingTop: 5,
}

class Dashboard extends React.Component{
    render(){
        return(
            <div className="root">
                <Grid container justify='flex-end' direction='row' spacing={3} alignItems='stretch'>
                    <Grid item xs={6}>
                        <div style={grid_item_styles}>
                            <h3>Notes</h3>
                            <NotesPrev />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={grid_item_styles}>
                            <h3>Todos</h3>
                            <NotesPrev />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={grid_item_styles}>
                            <h3>Events</h3>
                            <NotesPrev />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;