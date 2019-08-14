import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

/*
Shows summary of most important todos on the dashboard
*/
class TodoSummary extends React.Component{
    render(){
        const todo = this.props.todo;
        return(
            <div className='container' style={{width: '100%'}}>
                <Card>
                    <CardContent>
                        {/* holds text in each list item of todo list */}
                        <div className='todo-content'>
                            <FormControl component='fieldset'>
                                <FormGroup>
                                    <FormControlLabel
                                    control = {<Checkbox checked={false} value='todo'/>}
                                    label={todo.task} />
                                </FormGroup>
                            </FormControl>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default TodoSummary;