import React from 'react';
import TodoSummary from '../todos/TodoSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import CompletedTodoSummary from '../todos/CompletedTodoSummary';
import { Hidden } from '@material-ui/core';

const todolist_title_styles = {
    overflow:'hidden',
    display:'inline-block',
    width:'100%',
    borderBottom:'1px solid #000',
    padding:'5px',
}

/* pulls in data from firebase and passes data of each notes item
as props into each notesummary so the notesummary component can render
each individual note given the props

Inside of dashboard, shows list of summaries of important todos
*/
class TodosPrev extends React.Component{
    render(){
        const todoList = this.props.todoList;

        return(
            <div>
                {
                    /* ternary to determine whether to show the list of noncompleted & completed todos
                    or tell the user there are no todos
                    */
                    todoList ? 
                        <div className="list-container">
                            <p style={todolist_title_styles}>Get working on it!</p>
                            <List aria-label="previews">
                                { todoList && todoList.map(todo => {
                                    return(
                                        <ListItem button key={todo.id}>
                                            <TodoSummary key={todo.id} todo={todo}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <p style={todolist_title_styles}>Completed!</p>
                            <List aria-label="previews">
                                { todoList && todoList.map(todo => {
                                    return(
                                        <ListItem button key={todo.id}>
                                            <CompletedTodoSummary key={todo.id} todo={todo}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div> :
                    <h3 style={{padding: '25px', textAlign:'center'}}>
                        No todos currently! Keep it up!
                    </h3>
                }
            </div>
        );
    }
}

export default TodosPrev;