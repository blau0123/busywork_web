import React from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {deleteTodo} from '../../redux/store/actions/todoActions';

const delete_styles = {
    color: 'black',
    fontFamily:'Playfair Display, serif',
    float:'right',
    maxWidth:'10px',
}

/*
Shows summary of completed todos on the dashboard
When todo is completed, gives option to user to delete the todos forever
*/
class CompletedTodoSummary extends React.Component{
    constructor(){
        super();
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo = (evt) => {
        evt.preventDefault();
        // call the deleteTodo action creator to delete note from firestore
        this.props.deleteTodo(this.props.todo.id);
    }

    render(){
        const todo = this.props.todo;
        // if todo is not completed, don't render this component
        if (!todo.completed){
            return null;
        }

        return(
            <div className='container' style={{width: '100%'}}>
                <Card>
                    {/* add link outside of cardcontent so whenever the content of
                    the card is clicked, redirected to given pathname */}
                    <CardContent>
                        {/* holds text in each list item of todo list */}
                        <div className='todo-content'>
                            <FormControl component='fieldset' style={{width:'100%'}}>
                                <FormGroup> 
                                    <Grid container spacing={3}>
                                        <Grid item xs={7} md={9} lg={10}>
                                            <FormControlLabel
                                                checked={todo.completed}
                                                control = {<Checkbox checked={todo.completed} 
                                                                value='todo'
                                                                id={todo.id}
                                                                style={{textDecoration:'line-through', color:'#B0D7E6'}}/>}
                                                label={todo.todo}/>
                                        </Grid>
                                        <Grid item xs={5} md={3} lg={2}>
                                            <Button style={delete_styles} onClick={this.deleteTodo}>
                                                X
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </FormGroup>
                            </FormControl>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    }
}

export default connect(null, mapDispatchToProps)(CompletedTodoSummary);