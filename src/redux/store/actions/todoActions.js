/*
Action creators that deal with the todo aspect, such as
add todo, delete todo on completion, etc
*/

export const addTodo = (todo) => {
    // allowed args getfirebase, getfirestore in index.js
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        // get uid to keep track of which user wrote which todo
        const userId = getState().firebase.auth.uid;


        // when adding a todo, completed will always be false first
        firestore.collection('todos').add({
            todo: todo.todo,
            completed: false,
            lastUpdated: new Date(),
            authorId: userId,
        }).then(() => {
            // make dispatch call to reducer after async call done
            dispatch({
                type: 'ADD_TODO',
                todoToAdd: todo,
            })
        }).catch((err) => {
            // if fail to add todo, dispatch different action to handle failure
            dispatch({
                type: 'ADD_TODO_FAIL',
                error: err,
            })
        })
    }
}

export const completeTodo = (todoId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        
        // checked, so completed will always go from false to true
        firestore.collection('todos').doc(todoId).update({
            completed: true,
        }).then(() => {
            dispatch({
                type: 'COMPLETED_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'COMPLETED_FAIL',
                error: err,
            })
        })
    }
}