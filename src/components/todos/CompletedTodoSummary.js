import React from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

/*
Shows summary of completed todos on the dashboard
*/
class CompletedTodoSummary extends React.Component{
    constructor(){
        super();
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
                            <FormControl component='fieldset'>
                                <FormGroup> 
                                    <FormControlLabel
                                    checked={todo.completed}
                                    control = {<Checkbox checked={todo.completed} 
                                                    value='todo'
                                                    id={todo.id}
                                                    style={{textDecoration:'line-through', color:'#B0D7E6'}}/>}
                                    label={todo.todo}/>
                                </FormGroup>
                            </FormControl>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default CompletedTodoSummary;