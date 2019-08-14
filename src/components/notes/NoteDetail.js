import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class NoteDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            body:''
        }
    }
    
    /* handles when there's a change in the input text (make sure
    id's of input components match name of corresponding state var)
    */
    handleChange = (evt) => {
        this.setState({
            //change the value of id of email/pw to new value
            [evt.target.id]: evt.target.value
        })
    }

// handles when submit btn clicked
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
    }

    render(){
        const thisNote = this.props.location.state.note;
        console.log(thisNote);
        return(
            <div className="bg-container">
                <div style={{margin: '100px'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <div style={{padding: '40px'}} className="signin-container">
                                {/* text form for view and edit note */}
                                <form onSubmit={{}} className="form-container">
                                    <FormControl fullWidth>
                                        <TextField id='title'
                                            label="Title" margin="normal" 
                                            value={thisNote.title}
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                        <TextField id="body"
                                            label="What's on your mind?"
                                            margin="normal" 
                                            multiline='true'
                                            rows='20'
                                            value={thisNote.body}
                                            style={{margin:'10px'}}
                                            onChange={this.handleChange}/>
                                    </FormControl>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
    
}

export default NoteDetail;