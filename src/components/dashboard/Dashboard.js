import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import NotesPrev from './NotesPrev';
import TodosPrev from './TodosPrev';
import EventsPrev from './EventsPrev';

const grid_items_styles = {
    background: '#F9F9F9',
    height: '100%',
}

const title_styles = {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    fontSize: '24px',
    paddingLeft: '25px',
}

class Dashboard extends React.Component{
    render(){
        return(
            <div className="root" style={{margin: '25px'}}>
                <Grid container justify='flex-start' direction='row' spacing={3} 
                alignItems='stretch' wrap='wrap'>
                    <Grid item className="notes-item" xs={7} style={{margin: '10px'}}>
                        <Card style={grid_items_styles}>
                            <CardContent>
                                <Link to='/' style={title_styles}>Notes</Link>
                                <NotesPrev />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container item direction='row' xs={5} spacing={3} justify='flex-end'>
                        <Grid item className="todos-item" xs={12} style={{margin: '10px'}}>
                            <Card style={grid_items_styles}>
                                <CardContent>
                                    <Link to='/' style={title_styles}>Todos</Link>
                                    <TodosPrev />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item className="events-item" xs={12} style={{margin: '10px'}}>
                            <Card style={grid_items_styles}>
                                <CardContent>
                                    <Link to='/' style={title_styles}>Events</Link>
                                    <EventsPrev />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;