import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Summary of notes that are displayed on the dashboard for easy access,
rather than showing all notes or having to traverse to the notes page
*/
class NoteSummary extends React.Component{
    render(){
        return(
            <div className="container" style={{width: '100%'}}>
                <Card style={{height: '250px'}}>
                    <CardContent>
                        {/* holds text in each list item of notes list */}
                        <div className="note-content">
                            <h3>a note</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default NoteSummary;