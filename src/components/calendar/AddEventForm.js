import React from 'react';
import {connect} from 'react-redux';

import {addEvent} from '../../redux/store/actions/eventActions';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {MuiPickersUtilsProvider, DateTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const signin_btn_styles = {
    textTransform: 'none',
    margin: '10px',
    padding: '10px',
    background: '#6E88C1',
    color: 'white',
    fontFamily:'Playfair Display, serif',
}

const form_entry_styles = {
    margin:'10px',
    fontFamily:'Playfair Display, serif',
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
        // after add event, go back to previous page with router's history obj
        this.props.history.goBack();
    }

    /*
    Q: how to get id of date changer to recognize if start or end time changed
    instead of having separate handlers for start and end times
    */
    // handles when user selects a date
    handleStartDateChange = (date) => {
        this.setState({
            startTime: new Date(+date),
        })
    }

    handleEndDateChange = (date) => {
        this.setState({
            endTime: new Date(+date),
        })
    }

    render(){
        console.log(this.props);
        return(
            <form className="form-container">
                <FormControl fullWidth>
                    <TextField id='title'
                        label="Title" margin="normal" 
                        style={form_entry_styles}
                        required="true"
                        inputProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        InputLabelProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        onChange={this.handleChange}/>
                    <TextField id="description"
                        label="Description"
                        margin="normal" 
                        multiline='true'
                        rows='20'
                        style={form_entry_styles}
                        inputProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        InputLabelProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        onChange={this.handleChange}/>
                    <TextField id='location'
                        label="Location" margin="normal" 
                        style={form_entry_styles}
                        inputProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        InputLabelProps={{
                            style:{fontFamily:'Playfair Display, serif'}
                        }}
                        onChange={this.handleChange}/>
                    {/* have user enter a date and time for the event */}
                    <MuiPickersUtilsProvider
                        className='date-picker'
                        utils={DateFnsUtils}>
                        <DateTimePicker
                            id='startTime'
                            label='Choose a start time'
                            value={this.state.startTime}
                            onChange={this.handleStartDateChange}
                            inputProps={{
                                style:{fontFamily:'Playfair Display, serif'}
                            }}
                            InputLabelProps={{
                                style:{fontFamily:'Playfair Display, serif'}
                            }}
                            style={form_entry_styles} />
                        <DateTimePicker
                            id='endTime'
                            label='Choose an end time'
                            value={this.state.endTime}
                            onChange={this.handleEndDateChange} 
                            inputProps={{
                                style:{fontFamily:'Playfair Display, serif'}
                            }}
                            InputLabelProps={{
                                style:{fontFamily:'Playfair Display, serif'}
                            }}
                            style={form_entry_styles}/>
                    </MuiPickersUtilsProvider>

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