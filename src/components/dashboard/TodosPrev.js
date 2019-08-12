import React from 'react';
import TodoSummary from '../todos/TodoSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class TodosPrev extends React.Component{
    render(){
        return(
            <List aria-label="previews">
                <ListItem button>
                    <TodoSummary />
                </ListItem>
                <ListItem button>
                    <TodoSummary />
                </ListItem>
            </List>
        );
    }
}

export default TodosPrev;