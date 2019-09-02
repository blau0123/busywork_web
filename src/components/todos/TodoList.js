import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Spring} from 'react-spring/renderprops';

import TodoSummary from './TodoSummary';
import CompletedTodoSummary from './CompletedTodoSummary';
import GridTodoTitle from '../dashboard/GridTodoTitle';

const todolist_title_styles = {
    overflow:'hidden',
    display:'inline-block',
    width:'100%',
    borderBottom:'1px solid #000',
    padding:'5px',
    leftMargin:'5px',
}

class TodoList extends React.Component{
    render(){
        const userTodoList = this.props.todoList ? this.props.todoList.filter(todo => todo.authorId === this.props.auth.uid) : null;
        return(
            <div className="bg-container">
                <div style={{margin: '5vh 20vw'}} className="container">
                    <Spring from={{opacity:0}} to={{opacity:1}} config={{duration:500}}>
                        {props => (
                            <div style={props}>
                                <Card style={{background: '#F9F9F9'}}>
                                    <CardContent>
                                        <GridTodoTitle />
                                        {
                                            /* ternary to determine whether to show the list of noncompleted & completed todos
                                            or tell the user there are no todos
                                            */
                                            userTodoList ? 
                                                <div className="list-container">
                                                    <p style={todolist_title_styles}>Get working on it!</p>
                                                    <List aria-label="previews">
                                                        { userTodoList && userTodoList.map(todo => {
                                                            // if completed, don't show this todo in noncompleted list
                                                            if (todo.completed) return null;

                                                            return(
                                                                <ListItem button key={todo.id}>
                                                                    <TodoSummary key={todo.id} todo={todo}/>
                                                                </ListItem>
                                                            )
                                                        })}
                                                    </List>
                                                    <p style={todolist_title_styles}>Completed!</p>
                                                    <List aria-label="previews">
                                                        { userTodoList && userTodoList.map(todo => {
                                                            // if not completed, don't show in this completed list
                                                            if (!todo.completed) return null;

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
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </Spring>
                </div>
            </div>
        )
    }
}

// allow dashboard to access certain props from store
const mapStateToProps = (storeState) => {
    return({
        todoList: storeState.firestore.ordered.todos,
        auth: storeState.firebase.auth,
    });
}

export default compose(firestoreConnect([{collection:'todos'}]), 
    connect(mapStateToProps))(TodoList);