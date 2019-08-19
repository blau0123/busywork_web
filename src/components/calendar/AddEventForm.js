import React from 'react';
import {connect} from 'react-redux';

import {addEvent} from '../../redux/store/actions/eventActions';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const signin_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#6E88C1',
    color: 'white',
}

// the actual form for the AddEvent component that takes in user input
class AddEventForm extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            description:'',
            location:'',
            startTime: new Date(),
            endTime: new Date(),
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
        // state holds info for the note wanted to add, so pass it in to action creator
        this.props.addEvent(this.state);
    }

    // handles when user selects a date
    handleDateChange(date){

    }

    render(){
        return(
            <form className="form-container">
                <FormControl fullWidth>
                    <TextField id='title'
                        label="Title" margin="normal" 
                        style={{margin:'10px'}}
                        required="true"
                        onChange={this.handleChange}/>
                    <TextField id="description"
                        label="Description"
                        margin="normal" 
                        multiline='true'
                        rows='20'
                        style={{margin:'10px'}}
                        onChange={this.handleChange}/>
                    <TextField id='location'
                        label="Location" margin="normal" 
                        style={{margin:'10px'}}
                        onChange={this.handleChange}/>
                    {/* have user enter a date and time for the event */}
                    {/*
                    <KeyboardDatePicker disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={this.state.startDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label':'change date',
                        }} />
                    */
                    }
                    <Button variant='contained' className="submit-btn"
                        onClick={this.handleSubmit}
                        style={signin_btn_styles}>
                        Create Event
                    </Button>
                </FormControl>
            </form>
        )
    }
}

// allows this component to access action creators, like addNote()
const mapDispatchToProps = (dispatch) => {
    return {
        // addNote is a method that dispatches action creator that makes async call
        addEvent: (event) => dispatch(addEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(AddEventForm);