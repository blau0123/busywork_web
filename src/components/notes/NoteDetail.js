import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// props is obtained from Route routing to this 'page'
const NoteDetail = (props) => {
    const thisNote = props.location.state.note;
    console.log(thisNote);
    return(
        <div className="container" style={{margin: '25px'}}>
            <Card style={{background:'#F9F9F9', padding: '10px'}}>
                <CardContent>
                    <div className="note-content">
                        <h3>{thisNote.title}</h3>
                        <p>{thisNote.body}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteDetail;