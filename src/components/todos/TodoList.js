import React from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import TodoSummary from './TodoSummary';

class TodoList extends React.Component{
    render(){
        const todoList = this.props.todoList;
        return(
            <div className="bg-container">
                <div style={{margin: '100px'}} className="container">
                    <Card style={{background: '#F9F9F9'}}>
                        <CardContent>
                            <h3 style={{paddingLeft:'25px'}}>Your Todos</h3>
                            <List aria-label="previews">
                                { todoList && todoList.map(todo => {
                                    return(
                                        <ListItem button key={todo.id}>
                                            <TodoSummary key={todo.id} todo={todo}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

// allow dashboard to access certain props from store
const mapStateToProps = (storeState) => {
    return({
        todoList: storeState.todos.todoList,
    });
}

export default connect(mapStateToProps)(TodoList);