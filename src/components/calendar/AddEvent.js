import React from 'react';

import AddEventForm from './AddEventForm';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Component that allows user to sign in with username and password
stored in firebase firestore database (done in AddEventForm)
*/
class AddEvent extends React.Component{
    render(){
        return(
            <div className="bg-container">
                <div style={{margin: '5vh 20vw'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px', fontFamily:'Playfair Display, serif'}} className="signin-container">
                                <h3>New Event</h3>
                                <AddEventForm />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default AddEvent;