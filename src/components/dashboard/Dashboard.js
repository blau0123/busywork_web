import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import NotesPrev from './NotesPrev';
import TodosPrev from './TodosPrev';
import EventsPrev from './EventsPrev';

const grid_item_styles = {
    flex: 1,
}

class Dashboard extends React.Component{
    render(){
        return(
            <div className="root" style={{margin: '25px'}}>
                <Grid container justify='flex-start' direction='row' spacing={3} 
                alignItems='stretch' wrap='wrap'>
                    <Grid item xs={7} style={{margin: '10px'}}>
                        <Card style={{background:'#F9F9F9'}}>
                            <CardContent>
                                <h3 style={{textAlign:'center'}}>Notes</h3>
                                <NotesPrev />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container item direction='row' xs={5} spacing={3} justify='flex-end'>
                        <Grid item xs={12} style={{margin: '10px'}}>
                            <Card style={{background:'#F9F9F9'}}>
                                <CardContent>
                                    <h3 style={{textAlign:'center'}}>Todos</h3>
                                    <TodosPrev />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} style={{margin: '10px'}}>
                            <Card style={{background:'#F9F9F9'}}>
                                <CardContent>
                                    <h3 style={{textAlign:'center'}}>Events</h3>
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