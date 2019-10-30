import React from 'react';
import { Card, CardContent } from '@material-ui/core';

// styles for each grid item
const grid_items_styles = {
    background: '#F9F9F9',
    height: '100vh',
}

class Calendar extends React.Component{
    render(){
        return (
            <div className='cal-container'>
                <Card>
                    <CardContent style={grid_items_styles}>
                        <h3>Calendar</h3>
                        <h2>Coming soon...</h2>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Calendar;