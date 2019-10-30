import React from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {completeTodo} from '../../redux/store/actions/todoActions';

/*
Shows summary of most important todos on the dashboard
*/
class TodoSummary extends React.Component{
    constructor(){
        super();
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(evt){
        console.log(this.props);
        this.props.completeTodo(evt.target.id);
    }

    render(){
        const todo = this.props.todo;
        /* if todo is completed, don't render this component
        if (todo.completed){
            return null;
        }
        */
        return(
            <div className='container' style={{width: '100%'}}>
                <Card>
                    {/* add link outside of cardcontent so whenever the content of
                    the card is clicked, redirected to given pathname */}
                    <CardContent>
                        {/* holds text in each list item of todo list */}
                        <div className='todo-content'>
                            <FormControl component='fieldset'>
                                <FormGroup> 
                                    <FormControlLabel
                                    control = {<Checkbox checked={todo.completed} 
                                                    value='todo'
                                                    id={todo.id}
                                                    onChange={this.handleComplete}/>}
                                    label={todo.todo}
                                    iconStyles={{fill:'white'}}
                                    labelStyle={{color:'white'}}/>
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
        completeTodo: (todoId) => dispatch(completeTodo(todoId))
    }
}

export default connect(null, mapDispatchToProps)(TodoSummary);